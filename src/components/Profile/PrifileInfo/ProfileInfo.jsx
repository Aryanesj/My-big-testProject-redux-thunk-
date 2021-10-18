import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.js';
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>
            <img src="https://img2.goodfon.ru/wallpaper/big/1/1e/tekstury-seryy-fon-textures.jpg" alt=""/>
            </div>*/}
               <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.small} />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
               </div>
        </div>
    )
}

export default ProfileInfo;