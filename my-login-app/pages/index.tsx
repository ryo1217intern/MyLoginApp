import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
    confirmationPassword: string;
};

export default function Signup(){
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Inputs>();
    return 
        <>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="example@test.com" {...register("email", {required: true})} />
                    {errors.email && <p>メールアドレスは必須です</p>}
                </div>
                <div>
                    <label>PassWord</label>
                    <input type="password" {...register("password", {required: true})}/>
                    {errors.password && <p>パスワードは必須です</p>}
                </div>
                <div>
                    <label>Re PassWord</label>
                    <input type="password" {...register("confirmationPassword", {required: true})}/>
                    {errors.confirmationPassword && <p>確認用パスワードは必須です</p>}
                </div>
                <div>
                    <button type="button">submid</button>
                </div>
            </form>
        </>
}