import DefaultLayout from '@/components/DefaultLayout';
import LayoutSeo from '@/components/LayoutSeo';
import * as React from 'react';

export interface ILiCenseProps {
}

export default function LiCense(props: ILiCenseProps) {
    return (
        <LayoutSeo title='LiCense - Solution'>
            <DefaultLayout>
                <div className="license_container">
                    <div className="pass_content_title_small">
                        <p className="pass_content_title_small_dot"></p>
                        <p className="pass_content_title_small_title">Template Information</p>
                    </div>
                    <p className="license_content_title_big">Licencing</p>

                    <div className="license_session">
                        <p className="license_session_title_big">Icons & Graphics</p>
                        <p className="license_session_lorem">Icons and Graphics were manually designed by the VictorFlow team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                        <p className="license_session_title_small">Phosphor Icons: <span className="license_session_green">License</span></p>
                        <p className="license_session_title_big">Photography</p>
                        {/* <p className="license_session_lorem">All images used in the WhiteCollar Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash</p> */}
                        <p className="license_session_title_small">Pexels: <span className="license_session_green">License</span></p>
                        <p className="license_session_lorem_green">Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image 8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image 15,Image 16,Image 17,Image 18,Image 19,Image 20</p>
                        <p className="license_session_title_small">Unsplash: <span className="license_session_green">License</span></p>
                        <p className="license_session_lorem_green">Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image 8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image 15,Image 16,Image 17,Image 18,Image 19,Image 20</p>
                        <p className="license_session_title_big">Font</p>
                        <p className="license_session_lorem">WhiteCollar template uses free licensed <span className="license_session_green">Google Fonts</span>. Please check <span className="license_session_green">Poppins</span> and <span className="license_session_green">Inter</span></p>
                    </div>
                </div>
            </DefaultLayout>
        </LayoutSeo>
    );
}
