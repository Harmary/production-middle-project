import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
}
