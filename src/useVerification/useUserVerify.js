import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useUserVerify = (user) => {
    console.log(user);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        if (user) {
            console.log(user.email);
            fetch(`https://server-bice-beta.vercel.app/user/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("indicator", data.userRole);

                    if (data.userRole === 'buyer') {
                        setIsBuyer(true)
                    }
                    if (data.userRole === 'seller') {
                        setIsSeller(true)
                    }
                    if (data.userRole === "admin") {

                        setIsAdmin(true)
                    }
                    setIsUserLoading(false);
                })
        }
    }, [user]);
    console.log(isSeller, isBuyer, isAdmin);

    return [isSeller, isBuyer, isAdmin, isUserLoading]

}
