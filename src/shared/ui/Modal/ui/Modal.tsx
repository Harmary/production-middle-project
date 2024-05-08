import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback } from 'react';
import cls from './Modal.module.scss';

type ModalProps = {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClosed?: () => void;
}

const ANIMATION_DELAY = 300;

export function Modal(props: ModalProps) {
    const {
        className, children, onClosed, isOpen,
    } = props;
    const [isClosing, setIsClosing] = React.useState(false);
    const timedRef = React.useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosed]: isClosing,
    };

    const closeHandler = () => {
        if (onClosed) {
            setIsClosing(true);
            timedRef.current = setTimeout(() => {
                onClosed();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(() => {
        closeHandler();
    }, [closeHandler()]);

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timedRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={classNames(cls.content, mods, [className])}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
