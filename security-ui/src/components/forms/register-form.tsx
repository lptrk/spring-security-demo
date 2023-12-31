import {Input} from "../ui/input";
import {Button} from "../ui/button";

export const RegisterForm = () => {
    return (
        <div className='flex items-center justify-center '>
            <form>
                <Input type='text' placeholder='E-Mail'/>
                <Input type='text' placeholder='Username'/>
                <Input type='password' placeholder='Password'/>
                <Input type='password' placeholder='Repeat password'/>
                <div className='flex items-center justify-center'>
                    <Button text='Register'/>
                </div>
            </form>
        </div>
    );
};
