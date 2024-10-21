import type { ModalProps } from '../Modal/Modal';
import { Modal } from '../Modal/Modal';

import type { SettingModalItem } from './SettingChangeModalContent/SettingChangeModalContent';
import { SettingChangeModalContent } from './SettingChangeModalContent/SettingChangeModalContent';
import { FC } from 'react';

interface SettingChangeModalProps extends Pick<ModalProps, 'onClose'> {
  setting: SettingModalItem | null;
}

export const SettingChangeModal: FC<SettingChangeModalProps> = ({ onClose, setting, ...props }) => (
  <Modal {...props} isShowing={!!setting?.type} onClose={onClose}>
    {setting && <SettingChangeModalContent setting={setting} onClose={onClose} />}
  </Modal>
);
