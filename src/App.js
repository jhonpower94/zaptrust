import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "@reach/router";
import AccessPage from "./pages/accesspage";
import AccountIndex from "./pages/account";
import Profile from "./pages/account/profile";
import AdminIndex from "./pages/admin";
import AdminInfo from "./pages/admin/admininfo";
import AllUserTablesmain from "./pages/admin/allusers";
import AllCardsOrder from "./pages/admin/cardrequest";
import CreateTransferIndex from "./pages/admin/createtransaction";
import LoansTransactions from "./pages/admin/loanstable";
import AllTransactions from "./pages/admin/transactions";
import EditUser from "./pages/admin/user/user";
import AuthenticationIndex from "./pages/authentication";
import LoginDirect from "./pages/authentication/directlogin";
import SignIn from "./pages/authentication/login";
import ResetPassword from "./pages/authentication/resetpassword";
import SignUp from "./pages/authentication/signup";
import ConnectWallet from "./pages/connectwallet";
import DashboardIndex from "./pages/dashboard";
import Loan from "./pages/loan";
import ManageCards from "./pages/managecards";
import OrderCard from "./pages/managecards/order";
import SettingsIndex from "./pages/settings/resetpassword";
import ResetPin from "./pages/settings/resetpin";
import SuccessPage from "./pages/successpayment";
import TransactionIndex from "./pages/transactions";
import TransferIndex from "./pages/transfer";
import CardPin from "./pages/transfer/cardpin";
import Security from "./pages/transfer/securitycode";
import Redir from "./redirect";
import InstallPWA from "./pwainstallbutton";
import { Toolbar } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: blue[600],
    },
  },
  typography: {
    body2: {
      fontSize: 18,
    },
    h4: {
      fontWeight: 2000,
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: `#ffffff`,
            "&.Mui-selected:hover": {
              backgroundColor: "#ffffff",
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ThemeProvider theme={theme}>
        <Router>
          <AuthenticationIndex path="/">
            <Redir default />
            <SignIn path="/" />
            <SignIn path="admin/:pathtonavigate" />
            <SignUp path="signup" />
            <ResetPassword path="resetpassword" />
            <LoginDirect path="logindirect/:email/:password" />
          </AuthenticationIndex>

          <DashboardIndex path="dashboard">
            <AccountIndex path="account" />
            <Profile path="profile" />
            <ConnectWallet path="connectwallet" />
            <TransferIndex path="transfer/:account" />
            <TransactionIndex path="transactions/:account" />
            <SettingsIndex path="settings/:action" />
            <ResetPin path="resetpin" />
            <SuccessPage path="success" />
            <AccessPage path="access" />
            <ManageCards path="cards/:account" />
            <CardPin path="cardpin" />
            <Security path="security" />
            <Loan path="loan" />
            <OrderCard path="order" />
          </DashboardIndex>

          <AdminIndex path="manager">
            <AdminInfo path="/" />
            <AllTransactions path="transactions" />
            <LoansTransactions path="loans" />
            <AllUserTablesmain path="users" />
            <AllCardsOrder path="cards" />
            <EditUser path="user/:id" />
            <CreateTransferIndex path="addtransaction/:id" />
          </AdminIndex>
        </Router>
      </ThemeProvider>
     
      <InstallPWA />
    </div>
  );
}

export default App;
