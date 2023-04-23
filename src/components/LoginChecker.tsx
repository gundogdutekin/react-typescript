import React,{useState} from 'react'
type UserType = {
    name: string,
    email: string,
    phone: string
}
function LoginChecker() {
    const [user, setUser] = useState<UserType|null>({} as UserType)
   
    const handleLogin = () => {
        setUser({
        name: "Tekin Gündoğdu",
        email: "gundogdutekin@gmail.com",
        phone: "0532 000 00 00"
    })
   }
   const handleLogout = () => {
    setUser({} as UserType)
   }

  return (
    <div>
        <button onClick={handleLogin}>Giriş Yap</button>
        <button onClick={handleLogout}>Çıkış Yap</button>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
    </div>
  )
}

export default LoginChecker