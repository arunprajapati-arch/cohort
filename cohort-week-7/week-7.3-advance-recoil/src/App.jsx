import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobAtom, meSelector, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>  
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const [messagingNotificationCount, setMessagingNotificationCOunt] = useRecoilState(messagingAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const onlyNotificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(meSelector);


  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messaging ({messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount})</button>
      <button>Notifications ({onlyNotificationCount})</button>
      <button onClick={() =>  {
        setMessagingNotificationCOunt((count) => count +1 );
      }}>Me ({totalNotificationCount})</button>
    </>
  )
}
export default App
