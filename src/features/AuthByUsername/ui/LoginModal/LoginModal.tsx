import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
}
