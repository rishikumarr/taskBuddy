import { useAuth } from "@/context/AuthContext";
import Icon from "./Icon";

const PriNav = () => {
  const { currentUser } = useAuth();
    const displayName = currentUser?.displayName ?? undefined;
    const photoURL = currentUser?.photoURL ?? undefined;

    return (
      <nav className="header flex items-center justify-between padding-cls px-5 py-3 sm:py-5 bg-gradient-to-b from-[#fad2ff] to-[#faeefc] md:from-white md:to-white border-b-2 border-[#fbdeff] md:border-b-0 relative">
        <div className="header-leading flex items-center gap-1">
          <Icon className="w-5 h-5 md:w-7 md:h-7 text-pink-900 md:text-slate-600">
            <svg
              className="w-full h-full"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66536 26.5837H19.332C21.9904 26.5837 24.1654 24.4087 24.1654 21.7503V8.45866C24.1654 6.04199 22.4737 4.10866 20.1779 3.74616C19.6945 2.90033 18.8487 2.41699 17.882 2.41699H11.1154C10.1487 2.41699 9.30287 2.90033 8.81953 3.74616C6.5237 4.10866 4.83203 6.04199 4.83203 8.45866V21.7503C4.83203 24.4087 7.00703 26.5837 9.66536 26.5837ZM10.8737 4.95449C10.8737 4.95449 10.9945 4.83366 11.1154 4.83366H18.0029L18.1237 4.95449V5.80033C18.1237 5.92116 18.0029 6.04199 17.882 6.04199H11.1154C10.9945 6.04199 10.8737 5.92116 10.8737 5.80033V4.95449ZM7.2487 8.45866C7.2487 7.49199 7.73203 6.76699 8.45703 6.28366V6.40449C8.45703 6.52533 8.57786 6.64616 8.57786 6.76699C8.57786 6.76699 8.57786 6.88783 8.6987 6.88783C8.6987 7.00866 8.81953 7.12949 8.81953 7.12949L8.94036 7.25033C8.94036 7.37116 9.0612 7.37116 9.18203 7.49199L9.30286 7.61283L9.54453 7.85449L9.66536 7.97533C9.7862 7.97533 9.7862 8.09616 9.90703 8.09616C9.90703 8.09616 10.0279 8.09616 10.0279 8.21699C10.1487 8.21699 10.2695 8.33783 10.3904 8.33783H10.5112C10.7529 8.45866 10.8737 8.45866 11.1154 8.45866H18.607C18.7279 8.45866 18.8487 8.45866 18.9695 8.33783C18.9695 8.33783 19.0904 8.33783 19.0904 8.21699C19.2112 8.21699 19.2112 8.09616 19.332 8.09616L19.4529 7.97533C19.5737 7.97533 19.5737 7.85449 19.6945 7.73366L19.8154 7.61283L20.057 7.37116L20.1779 7.25033C20.1779 7.12949 20.2987 7.12949 20.2987 7.00866C20.2987 7.00866 20.2987 6.88783 20.4195 6.88783C20.4195 6.76699 20.5404 6.64616 20.5404 6.52533V6.40449C21.2654 6.76699 21.7487 7.61282 21.7487 8.57949V21.8712C21.7487 23.2003 20.6612 24.2878 19.332 24.2878H9.66536C8.3362 24.2878 7.2487 23.2003 7.2487 21.8712V8.45866Z"
                fill="currentColor"
              />
              <path
                d="M10.8763 19.333H13.293C14.018 19.333 14.5013 18.8497 14.5013 18.1247C14.5013 17.3997 14.018 16.9163 13.293 16.9163H10.8763C10.1513 16.9163 9.66797 17.3997 9.66797 18.1247C9.66797 18.8497 10.1513 19.333 10.8763 19.333ZM10.8763 14.4997H18.1263C18.8513 14.4997 19.3346 14.0163 19.3346 13.2913C19.3346 12.5663 18.8513 12.083 18.1263 12.083H10.8763C10.1513 12.083 9.66797 12.5663 9.66797 13.2913C9.66797 14.0163 10.1513 14.4997 10.8763 14.4997Z"
                fill="currentColor"
              />
            </svg>
          </Icon>
          <h1 className="text-base sm:text-2xl font-semibold bg-gradient-to-b from-[#4e0e55] to-[#ac3fb7] md:from-[rgb(30,32,34)] md:to-[rgb(131,131,131)] text-transparent bg-clip-text">
            TaskBuddy
          </h1>
        </div>
        <div className="header-trailing flex items-center gap-2">
          <div className="profile-img w-9 h-9 p-0.5 rounded-full bg-gradient-to-br from-[#db89e2] to-[#7c1f85]">
            <div className="w-full h-full bg-white rounded-full">
              <img src={photoURL} alt={`${displayName}'s image`} title={`${displayName}'s image`} className="w-full h-full rounded-full" referrerPolicy="no-referrer"/>
            </div>
          </div>
          <p className="text-sm whitespace-nowrap hidden sm:block overflow-hidden max-w-28 text-ellipsis line-clamp-1" title={displayName}>{displayName}</p>
        </div>
      </nav>
    );
};

export default PriNav;