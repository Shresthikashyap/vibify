//provider/AuthProvider.tsx

import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const updateApiToken = (token: string | null) => {
	if (token) axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	else delete axiosInstance.defaults.headers.common["Authorization"];
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { getToken } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const initAuth = async () => {
			try {
				const token = await getToken();
				//console.log("Token received:", token);
				updateApiToken(token);
			} catch (error: any) {
				updateApiToken(null);
				console.log("Error in auth provider", error);
			} finally {
				setLoading(false);
			}
		};

		initAuth();

	}, [getToken]);

	if (loading)
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Loader className='size-8 text-emerald-500 animate-spin' />
			</div>
		);

	return <>{children}</>;
};
export default AuthProvider;

// 1. User Authentication Flow

// When a user signs in through Clerk (via their sign-in components, redirects, etc.), Clerk handles the entire OAuth/authentication process
// Upon successful authentication, Clerk receives authentication credentials from the identity provider
// Clerk then issues its own JWT (JSON Web Token) for that authenticated session

// 2. Token Storage & Management

// Clerk automatically stores this JWT securely (typically in httpOnly cookies or secure browser storage)
// The useAuth() hook has access to Clerk's internal session management
// When you call getToken(), it retrieves this stored JWT

// 3. Token Refresh & Validation

// Clerk handles token refresh automatically when tokens expire
// getToken() can also validate the token and refresh it if needed before returning it