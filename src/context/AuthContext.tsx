import { createContext, ReactNode, useState, useEffect } from 'react'
import { destroyCookie, setCookie, parseCookies} from 'nookies'
import Router from 'next/router'

import {api} from '../services/apiClient'

interface AuthContextData{
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps)=>Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
    logoutUser: () => Promise<void>;
}

interface UserProps{
    id: string;
    name:string;
    yo:string;

}

type AuthProviderProps = {
    children: ReactNode;
}

interface SignInProps{
    name:string;
    password:string;
}

interface SignUpProps{
    name:string;
    yo:string;
    password:string;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    console.log("LOGOUT ERROR")
    try{
        destroyCookie(null, '@zelda.token', { path: '/'})
        Router.push('/');
    }catch(err){
        console.log("SIGNOUT ERROR")
    }
}

export function AuthProvider({ children }: AuthProviderProps){

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;
/*
    Autenticar Token e pagar Infos do User(iplementar quando o back estiver pronto)

    useEffect(() => {
        const {'@zelda.token': token} = parseCookies();

        if(token){
            api.get('/user').then(response => {
                const {id,name,yo} = response.data;
                setUser({
                    id,
                    name,
                    yo
                })
            })
            .catch(()=>{
                signOut();
            })
        }

    },[])

*/ 

    async function signIn({name,password}: SignInProps){
        try{
            const response = await api.post("/session", {
                name,
                password
            })

            const {id, token} = response.data;

            setCookie(undefined, '@zelda.token', token, {
                maxAge: 60*60*24, //expira em 24H
                path:'/'
            })

            setUser({
                id,
                yo:null,
                name
            })

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            Router.push('/home')

        }catch(err){
            Router.push('/home')//APAGAR DEPOIS: enquanto nao tem token nem endpoints(faz login mesmo sem cadastro)
            console.log("SIGNIN ERROR")

        }
    }

    async function signUp({name, yo, password}: SignUpProps) {
        try{
            const response = await api.post('/users', {
                name,
                yo,
                password
            })

            Router.push('/')//login

        }catch(err){
            Router.push('/')//APAGAR DEPOIS: enquanto nao tem token nem endpoints(faz "cadastro" mesmo sem back)
            console.log("SIGNUP ERROR")
        }
    }

    async function logoutUser() {
        try{
            destroyCookie(null, '@zelda.token', {path:'/'})
            Router.push('/')
            setUser(null);
        }catch(err){
            console.log("LOGOUT ERROR ",err)
        }
    }

    return(
        <AuthContext.Provider 
        value={{
                user,
                isAuthenticated,
                signIn,
                signUp,
                logoutUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}