import { AuthResponse } from "../models/AuthResponse";
import { Resource } from "../utils/Resource";

export interface ILogin{
    login(formData) : Promise<Resource<AuthResponse>>;
}