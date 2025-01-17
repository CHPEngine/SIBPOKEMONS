import classnames from 'classnames';

import styles from './Modal.module.css';
import { FC, ReactNode } from 'react';

export interface ModalProps {
  isShowing: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children, isShowing, onClose }) => (
  <div className={classnames({ [styles.modal_open]: isShowing })}>
    {isShowing && <div aria-hidden className={styles.modal_overlay} onClick={onClose} />}
    <div className={styles.modal_container} aria-modal aria-hidden tabIndex={-1} role='dialog'>
      {isShowing && children}
    </div>
  </div>
);
