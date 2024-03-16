import { CardWrapper } from "@/components/auth/card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
    return (
        <CardWrapper 
            headerLabel="Oops! ewast ist falsch gelaufen!"
            backButtonHref="/auth/login"
            backButtonLabel="Zurück zum Login"
        >
            <div className="w-full flex justify-center items-center">
                <FaExclamationTriangle className="text-destructive"/>
            </div>
        </CardWrapper>
    )
}