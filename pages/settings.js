import SettingsFrom from 'components/settingsForm/SettingForm'
import ModalLayout from 'components/layouts/modal/ModalLayout';
export default function Settings(props){
  return <SettingsFrom {...props} />
}

Settings.getLayout = function getLayout(page) {
  return (
    <ModalLayout>
      {page}
    </ModalLayout>
  )
}