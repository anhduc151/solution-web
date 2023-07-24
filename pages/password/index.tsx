import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import Image from 'next/image';
import * as React from 'react';
import icon from "../../public/images/icon_password.png"

export interface IPassWordProps {
}

export default function PassWord(props: IPassWordProps) {
    return (
        <LayoutSeo title='Pass Word'>
            <DefaultLayout>
                <div className="password_container">
                    <div className="pass_content">
                        <div className="pass_content_logo">
                            <Image alt='' src={icon} className='pass_content_logo_img'></Image>
                        </div>
                        <div className="pass_content_title_small">
                            <p className="pass_content_title_small_dot"></p>
                            <p className="pass_content_title_small_title">Password</p>
                        </div>
                        <p className="pass_content_title_big">Protected Page</p>
                        <div className="pass_content_input">
                            <input type="text" placeholder='Password'className='pass_content_input_input'/>
                        </div>
                        <div className="pass_content_button">
                            <button className='pass_content_button_btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
