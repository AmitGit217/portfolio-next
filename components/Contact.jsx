import { TextField, Button } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import Alert from "@mui/material/Alert";

function Contact() {
    const [isLoading, setLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_xvc2727",
                "template_pcwv9h4",
                form.current,
                "Myjq48-ct_Ytji2Aw"
            )
            .then(form.current.reset(), setLoading(false), setFormSent(true));
        setTimeout(() => {
            setFormSent(false);
        }, 2000);
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            id='contact'
            className='flex flex-col justify-center items-center mt-16 bg-white max-w-md m-auto p-10 rounded-md gap-y-10'>
            <h4 className=' font-sans text-2xl mb-10'>Contact me</h4>
            <TextField
                className=' w-full'
                type={"text"}
                label='name'
                name='from_name'
                required
            />
            <TextField
                className=' w-full'
                type={"email"}
                label='email'
                name='user_email'
                required
            />
            <TextField
                className=' w-full'
                type={"text"}
                label='message'
                name='message'
                multiline
                rows={4}
                maxRows={6}
                required
            />
            <Button
                type='submit'
                variant='contained'
                className=' w-60 h-14 bg-stone-900 hover:bg-stone-700 '>
                {" "}
                Send
            </Button>
            {isLoading && <CircularProgress className='absolute' />}
            {formSent && <Alert severity='success'>Thank you !</Alert>}
        </form>
    );
}

export default Contact;
