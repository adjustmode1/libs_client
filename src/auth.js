const auth = {
    islogin: false,
    signin:()=>{
        this.islogin = true;
    },
    sighout:()=>{
        this.islogin = false;
    }
}

export default auth;