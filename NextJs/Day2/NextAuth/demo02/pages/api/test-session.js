import { getSession } from "next-auth/react";

const handler = async(req,res)=>{
const session = await getSession({req});
if(! session) {
    res.status(401).json({error : 'unauthanticated'})
}else{
    res.status(200).json({msg:'success',session})
}
}
export default handler