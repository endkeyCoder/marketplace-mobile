import { Firebase } from "./Firebase";

export abstract class Setup {
    static init(withAnalytics: boolean = false){
        const app = Firebase.init()
        alert(JSON.stringify(app))
        if(withAnalytics){
            Firebase.getAnalytics(app)
        }
    }
}