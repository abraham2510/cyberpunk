import { useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = zod.object({
    email: zod.string()
        .min(1, 'Email is required')
        .email('Invalid email address'),
    terms: zod.boolean()
        .refine((val) => val === true, {
            message: 'You must accept the terms'
        })
});

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            terms: false
        }
    });

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <>
            <div className='bg-[#FCEE1C]'>
                <div className='2xl:container mx-auto '>
                    <div className='w-[90%] mx-auto'>
                        <div className='text-center space-y-6 pb-16'>
                            <h1 className='text-[32px] font-blenderbold leading-[38px] max-w-2xl mx-auto'>Sign up for the official Cyberpunk 2077 newsletter!</h1>
                            <p className='font-blender text-[22px] leading-[28px] max-w-3xl mx-auto'>From games to beyond, keep your feed up to date with the latest news and announcements on all things Cyberpunk 2077!</p>
                        </div>
                        <div className='pb-20'>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto">
                                <div className="relative z-0 w-full grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-4 items-start">
                                    <div className='space-y-6'>
                                        <div className='relative'>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                name="floating_email"
                                                id="floating_email"
                                                className={`block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-black'} appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer`}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="floating_email"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Email address
                                            </label>
                                            {errors.email && (
                                                <p className="text-red-600 text-sm font-medium mt-2">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div className='flex items-start gap-3'>
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                {...register('terms')}
                                                className="peer hidden"
                                            />
                                            <label
                                                htmlFor="terms"
                                                className={`h-4 w-4 rounded-sm border-2 ${errors.terms ? 'border-red-500' : 'border-black'} bg-[#FCEE1C] peer-checked:bg-black cursor-pointer`}
                                            ></label>

                                            <label htmlFor="terms" className='text-[14px] font-blender leading-[20px]'>
                                                <p>I would like to receive news, special offers and other information from CD PROJEKT and I am 17 years old or older.</p>
                                                <p className='mt-2'>CD PROJEKT will be responsible for your personal data. For more information please check our <a href="#" className="underline hover:text-gray-700">CD PROJEKT Privacy Policy</a></p>
                                                <p className='mt-2'>This site is protected by reCAPTCHA and the <a href="#" className="underline hover:text-gray-700">Google Privacy Policy</a> and <a href="#" className="underline hover:text-gray-700">Terms of Service</a> apply</p>
                                            </label>
                                            {errors.terms && (
                                                <p className="text-red-600 text-sm font-medium mt-2">{errors.terms.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center lg:justify-end lg:mt-6'>
                                        <button type="submit" className="relative group transition-transform hover:scale-105">
                                            <img src="src/assets/cp-btn-black-f7fe60d8.svg" alt="Button" className="w-[232px] h-[48px]" />
                                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-mono text-sm">SUBMIT</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-end items-end mt-10'>
                            <img src="src/assets/razor-bottom-black-4930e500.svg" alt="razorpattern" />
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
