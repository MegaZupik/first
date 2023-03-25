import React from 'react';
import s from './ProfileInfo.module.css';
/*import Preloader from "../../../common/preloader/preloader";*/
import ProfileStatus from "./ProfileStatus"



    const ProfileInfo = (props) => {
        if (props.profile) {

        return (
            <div>
{/*                <div>
                    <img
                        src='https://avatars.mds.yandex.net/i?id=e708784c502029fd3580605e76109216_l-5761336-images-thumbs&n=27&h=384&w=480'/>
                </div>*/}
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                    <div>Имя: {props.profile.fullName}</div>
                    <div>{(props.profile.lookingForAJob)?'Ищу работу':'Не ищу работу'}</div>
                    <div>Работаю: {props.profile.lookingForAJobDescription}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                </div>
            </div>
        )
    }}
    export default ProfileInfo;