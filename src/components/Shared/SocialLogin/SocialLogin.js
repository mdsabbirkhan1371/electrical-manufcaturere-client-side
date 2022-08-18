import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import auth from '../../../firebase.init'
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import useToken from '../../../hooks/useToken';
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const token = useToken(user || gitUser)
    const navigate = useNavigate()

    if (error || gitError) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || gitLoading) {
        return <Loading></Loading>
    }
    if (user || gitUser) {
        navigate('/home')
        toast.success('User Login Successful')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-info w-50'></div>
                <p className='mt-2 p-2 fs-4'>Or</p>
                <div style={{ height: '2px' }} className='bg-info w-50'></div>
            </div>

            <div className='text-center'>
                <Button onClick={() => signInWithGoogle()} className='w-50 text-white mb-2' variant="outline-primary">
                    <FontAwesomeIcon className='text-warning fs-2 mx-2' icon={faGoogle}></FontAwesomeIcon>
                    Continue With Google
                </Button>{' '}
                <Button onClick={() => signInWithGithub()} className='w-50 text-white' variant="outline-primary">
                    <FontAwesomeIcon className='text-warning fs-2 mx-2' icon={faGithub}></FontAwesomeIcon>     Continue With Github
                </Button>{' '}
            </div>


        </div>
    );
};

export default SocialLogin;