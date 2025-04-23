const base = {
    get() {
        return {
            url : "http://localhost:8080/gerenxiaofeiguanli/",
            name: "gerenxiaofeiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gerenxiaofeiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人消费管理系统"
        } 
    }
}
export default base
