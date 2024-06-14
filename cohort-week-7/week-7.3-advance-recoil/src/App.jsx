import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

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


  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messaging ({messagingNotificationCount >= 100 ? "99+" : messagingNotificationCount})</button>
      <button>Notifications ({onlyNotificationCount})</button>
      <button onClick={() =>  {
        setMessagingNotificationCOunt((count) => count +1 );
      }}>Me</button>
    </>
  )
}
export default App
