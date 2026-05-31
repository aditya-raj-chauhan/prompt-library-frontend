import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import ProtectedRoute
    from "../components/common/ProtectedRoute";

import Login
    from "../pages/auth/Login";

import Register
    from "../pages/auth/Register";

import Explore
    from "../pages/dashboard/Explore";

import CreatePrompt
    from "../pages/dashboard/CreatePrompt";

import MyPosts
    from "../pages/dashboard/MyPosts";

import Profile
    from "../pages/dashboard/Profile";

import SupportedModels
    from "../pages/dashboard/SupportedModels";

import UploadDetails
    from "../pages/uploads/UploadDetails";

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* Auth */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Dashboard */}

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Explore />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create"
                    element={
                        <ProtectedRoute>
                            <CreatePrompt />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-posts"
                    element={
                        <ProtectedRoute>
                            <MyPosts />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/models"
                    element={
                        <ProtectedRoute>
                            <SupportedModels />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/upload/:id"
                    element={
                        <ProtectedRoute>
                            <UploadDetails />
                        </ProtectedRoute>
                    }
                />

                {/* Fallback */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>

    );
};

export default AppRoutes;