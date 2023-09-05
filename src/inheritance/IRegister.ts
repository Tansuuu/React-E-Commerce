import { AuthResponse } from "../models/AuthResponse";
import { Resource } from "../utils/Resource";

export interface IRegister{
    register(formData) : Promise<Resource<AuthResponse>>;
}