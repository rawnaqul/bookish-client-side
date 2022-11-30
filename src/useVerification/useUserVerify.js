import { useEffect, useState } from "react";

export const useUserVerify = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(false);

    useEffect(() => {
        if (email) {
            setIsUserLoading(true)
            fetch(`http://localhost:5000/user/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.userRole === 'buyer') {
                        setIsBuyer(true)
                    }
                    if (data.userRole === 'seller') {
                        setIsSeller(true)
                    }
                    if (data.userRole === 'admin') {
                        setIsAdmin(true)
                    }

                    setIsUserLoading(false);
                })
        }
    }, [email])

    return [isSeller, isBuyer, isAdmin, isUserLoading]

}
