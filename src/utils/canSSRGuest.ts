//usar quando tiver o back completo
import {GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext} from 'next';
import { parseCookies } from 'nookies';

export function canSSRGuest<P>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if(cookies['@zelda.token']){
            return{
                redirect:{
                    destination:'/home',
                    permanent: false,
                }
            }
        }

        return await fn(ctx);

    }
}