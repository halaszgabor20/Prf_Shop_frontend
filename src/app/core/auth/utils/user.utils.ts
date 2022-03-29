import { UserData } from "../models/user-data";

export class UserUtils {
    public static saveUserData(data: UserData): UserData {
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        const userData = {
            ...data,
            expiresIn: expirationDate.toISOString()
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        return data;
    }
}
