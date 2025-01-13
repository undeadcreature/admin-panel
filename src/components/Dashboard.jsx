import '../app.min.css';
import '../icons.min.css';
import img1 from '../assets/users/user-1.jpg';
export default function Dashboard() {
    return (
        <>
            <div>
                <div id="wrapper">

                    <div className="navbar-custom">
                        <div className="container-fluid ps-0">
                            <ul className="list-unstyled topnav-menu float-end mb-0">

                                <li className="d-none d-lg-block">
                                    <form className="app-search">
                                        <div className="app-search-box">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search..." id="top-search"/>
                                                    <button className="btn input-group-text" type="submit">
                                                        <i className="fe-search"></i>
                                                    </button>
                                                </div>
                                            <div className="dropdown-menu dropdown-lg" id="search-dropdown">








                                                <a href="onClick()" className="dropdown-item notify-item" onClick={(e) => e.preventDefault()}>

                                                </a>


                                                <a href=" " className="dropdown-item notify-item">

                                                </a>

                                            </div>
                                        </div>
                                    </form>
                                </li>

                                <li className="notification-list d-none d-lg-block">
                                    <a href=" " className="nav-link waves-effect waves-light" id="light-dark-mode"
                                        type="button">
                                        <i className="fe-sun noti-icon"></i>
                                    </a>
                                </li>

                                <li className="dropdown d-inline-block d-lg-none">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                        data-bs-toggle="dropdown" href=" " role="button" aria-haspopup="false"
                                        aria-expanded="false">
                                        <i className="fe-search noti-icon"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                                        <form className="p-3">
                                            <input type="text" className="form-control" placeholder="Search ..."
                                                aria-label="Recipient's username"/>
                                            </form>
                                    </div>
                                </li>

                                <li className="dropdown notification-list topbar-dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href=" "
                                        role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="fe-bell noti-icon"></i>
                                        <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-lg">


                                        <div className="dropdown-item noti-title">
                                            <h5 className="m-0">
                                                <span className="float-end">
                                                    <a href=" " className="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>Notification
                                            </h5>
                                        </div>

                                        <div className="noti-scroll" data-simplebar>


                                            <a href=" " className="dropdown-item notify-item active">
                                                <div className="notify-icon">
                                                    <img src={img1} className="img-fluid rounded-circle"
                                                        alt="" />
                                                </div>
                                                <p className="notify-details">Cristina Pride</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </a>


                                            <a href=" " className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">1 min ago</small>
                                                </p>
                                            </a>


                                            <a href=" " className="dropdown-item notify-item">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/user-4.jpg" className="img-fluid rounded-circle"
                                                        alt="" />
                                                </div>
                                                <p className="notify-details">Karen Robinson</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Wow ! this admin looks good and awesome design</small>
                                                </p>
                                            </a>


                                            <a href=" " className="dropdown-item notify-item">
                                                <div className="notify-icon bg-warning">
                                                    <i className="mdi mdi-account-plus"></i>
                                                </div>
                                                <p className="notify-details">New user registered.
                                                    <small className="text-muted">5 hours ago</small>
                                                </p>
                                            </a>


                                            <a href=" " className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">4 days ago</small>
                                                </p>
                                            </a>


                                            <a href=" " className="dropdown-item notify-item">
                                                <div className="notify-icon bg-secondary">
                                                    <i className="mdi mdi-heart"></i>
                                                </div>
                                                <p className="notify-details">Carlos Crouch liked
                                                    <b>Admin</b>
                                                    <small className="text-muted">13 days ago</small>
                                                </p>
                                            </a>
                                        </div>

                                        <a href=" "
                                            className="dropdown-item text-center text-primary notify-item notify-all">
                                            View all
                                            <i className="fe-arrow-right"></i>
                                        </a>

                                    </div>
                                </li>

                                <li className="dropdown notification-list topbar-dropdown">
                                    <a className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                                        data-bs-toggle="dropdown" href=" " role="button" aria-haspopup="false"
                                        aria-expanded="false">
                                        <img src="assets/images/users/user-1.jpg" alt="user-image" className="rounded-circle"/>
                                            <span className="pro-user-name ms-1">
                                                Nowak <i className="mdi mdi-chevron-down"></i>
                                            </span>
                                        </a>
                                    <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>

                                        <a href="contacts-profile.html" className="dropdown-item notify-item">
                                            <i className="fe-user"></i>
                                            <span>My Account</span>
                                        </a>

                                        <a href="auth-lock-screen.html" className="dropdown-item notify-item">
                                            <i className="fe-lock"></i>
                                            <span>Lock Screen</span>
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        <a href="auth-logout.html" className="dropdown-item notify-item">
                                            <i className="fe-log-out"></i>
                                            <span>Logout</span>
                                        </a>

                                    </div>
                                </li>

                                <li className="dropdown notification-list">
                                    <a href=" " className="nav-link waves-effect waves-light"
                                        data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas">
                                        <i className="fe-settings noti-icon"></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="logo-box">
                                <a href="index.html" className="logo logo-light text-center">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height="22"/>
                                         </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-light.png" alt="" height="16"/>
                                        </span>
                                </a>
                                <a href="index.html" className="logo logo-dark text-center">
                                    <span className="logo-sm">
                                        <img src="assets/images/logo-sm.png" alt="" height="22"/>
                                        </span>
                                    <span className="logo-lg">
                                        <img src="assets/images/logo-dark.png" alt="" height="16"/>
                                        </span>
                                </a>
                            </div>

                            <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
                                <li className="">
                                    <button className="button-menu-mobile waves-effect">
                                        <i className="fe-menu"></i>
                                    </button>
                                </li>

                                <li className="d-none d-lg-flex">
                                    <h4 className="page-title-main">Dashboard</h4>
                                </li>

                            </ul>

                            <div className="clearfix"></div>

                        </div>
                    </div>

                    <div className="left-side-menu">

                        <div className="h-100" data-simplebar>

                            <div className="user-box text-center">

                                <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme"
                                    className="rounded-circle img-thumbnail avatar-md"/>
                                <div className="dropdown">
                                    <a href=" " className="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown"
                                        aria-expanded="false">Nowak Helme</a>
                                    <div className="dropdown-menu user-pro-dropdown">

                                        <a href=" " className="dropdown-item notify-item">
                                            <i className="fe-user me-1"></i>
                                            <span>My Account</span>
                                        </a>

                                        <a href=" " className="dropdown-item notify-item">
                                            <i className="fe-settings me-1"></i>
                                            <span>Settings</span>
                                        </a>


                                        <a href=" " className="dropdown-item notify-item">
                                            <i className="fe-lock me-1"></i>
                                            <span>Lock Screen</span>
                                        </a>


                                        <a href=" " className="dropdown-item notify-item">
                                            <i className="fe-log-out me-1"></i>
                                            <span>Logout</span>
                                        </a>

                                    </div>
                                </div>

                                <p className="text-muted left-user-info">Admin Head</p>

                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href=" " className="text-muted left-user-info">
                                            <i className="mdi mdi-cog"></i>
                                        </a>
                                    </li>

                                    <li className="list-inline-item">
                                        <a href=" ">
                                            <i className="mdi mdi-power"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div id="sidebar-menu">

                                <ul id="side-menu">

                                    <li className="menu-title">Navigation</li>

                                    <li>
                                        <a href="index.html">
                                            <i className="mdi mdi-view-dashboard-outline"></i>
                                            <span className="badge bg-success rounded-pill float-end">9+</span>
                                            <span> Dashboard </span>
                                        </a>
                                    </li>

                                    <li className="menu-title mt-2">Apps</li>

                                    <li>
                                        <a href="apps-chat.html">
                                            <i className="mdi mdi-forum-outline"></i>
                                            <span> Chat </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#email" data-bs-toggle="collapse">
                                            <i className="mdi mdi-email-outline"></i>
                                            <span> Email </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="email">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="email-inbox.html">Inbox</a>
                                                </li>
                                                <li>
                                                    <a href="email-templates.html">Email Templates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>



                                    <li>
                                        <a href="#contacts" data-bs-toggle="collapse">
                                            <i className="mdi mdi-book-open-page-variant-outline"></i>
                                            <span> Contacts </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="contacts">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="contacts-list.html">Members List</a>
                                                </li>
                                                <li>
                                                    <a href="contacts-profile.html">Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-title mt-2">Custom</li>

                                    <li>
                                        <a href="#sidebarAuth" data-bs-toggle="collapse">
                                            <i className="mdi mdi-account-multiple-plus-outline"></i>
                                            <span> Auth Pages </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarAuth">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="auth-login.html">Log In</a>
                                                </li>
                                                <li>
                                                    <a href="auth-register.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="auth-recoverpw.html">Recover Password</a>
                                                </li>
                                                <li>
                                                    <a href="auth-lock-screen.html">Lock Screen</a>
                                                </li>
                                                <li>
                                                    <a href="auth-confirm-mail.html">Confirm Mail</a>
                                                </li>
                                                <li>
                                                    <a href="auth-logout.html">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#sidebarExpages" data-bs-toggle="collapse">
                                            <i className="mdi mdi-file-multiple-outline"></i>
                                            <span> Extra Pages </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarExpages">
                                            <ul className="nav-second-level">


                                                <li>
                                                    <a href="pages-timeline.html">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="pages-invoice.html">Invoice</a>
                                                </li>




                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#sidebarLayouts" data-bs-toggle="collapse">
                                            <i className="mdi mdi-dock-window"></i>
                                            <span> Layouts </span>
                                            <span className="menu-arrow"></span>

                                        </a>
                                        <div className="collapse" id="sidebarLayouts">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="layouts-horizontal.html">Horizontal</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-title mt-2">Components</li>






                                    <li>
                                        <a href="#sidebarForms" data-bs-toggle="collapse">
                                            <i className="mdi mdi-texture"></i>
                                            <span> Forms </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarForms">
                                            <ul className="nav-second-level">



                                                <li>
                                                    <a href="forms-wizard.html">Wizard</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#sidebarTables" data-bs-toggle="collapse">
                                            <i className="mdi mdi-table"></i>
                                            <span> Tables </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarTables">
                                            <ul className="nav-second-level">

                                                <li>
                                                    <a href="tables-datatables.html">Data Tables</a>
                                                </li>
                                                <li>
                                                    <a href="tables-editable.html">Editable Tables</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#sidebarCharts" data-bs-toggle="collapse">
                                            <i className="mdi mdi-chart-donut-variant"></i>
                                            <span> Charts </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarCharts">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="charts-flot.html">Flot Charts</a>
                                                </li>
                                                <li>
                                                    <a href="charts-morris.html">Morris Charts</a>
                                                </li>
                                                <li>
                                                    <a href="charts-chartjs.html">Chartjs Charts</a>
                                                </li>
                                                <li>
                                                    <a href="charts-chartist.html">Chartist Charts</a>
                                                </li>
                                                <li>
                                                    <a href="charts-sparklines.html">Sparkline Charts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#sidebarMaps" data-bs-toggle="collapse">
                                            <i className="mdi mdi-map-outline"></i>
                                            <span> Maps </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="collapse" id="sidebarMaps">
                                            <ul className="nav-second-level">
                                                <li>
                                                    <a href="maps-google.html">Google Maps</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>


                                </ul>
                            </div>

                        </div>


                        <div className="clearfix"></div>

                    </div>


                </div>


                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            <div className="row">

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>

                                            <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

                                            <div className="widget-chart-1">
                                                <div className="widget-chart-box-1 float-start" dir="ltr">
                                                    <input data-plugin="knob" data-width="70" data-height="70"
                                                        data-fgcolor="#f05050 " data-bgcolor="#F9B9B9" value="58" data-skin="tron"
                                                        data-angleOffset="180" data-readOnly={true} data-thickness=".15" />
                                                </div>

                                                <div className="widget-detail-1 text-end">
                                                    <h2 className="fw-normal pt-2 mb-1"> 256 </h2>
                                                    <p className="text-muted mb-1">Revenue today</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>

                                            <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

                                            <div className="widget-box-2">
                                                <div className="widget-detail-2 text-end">
                                                    <span className="badge bg-success rounded-pill float-start mt-3">32% <i
                                                        className="mdi mdi-trending-up"></i> </span>
                                                    <h2 className="fw-normal mb-1"> 8451 </h2>
                                                    <p className="text-muted mb-3">Revenue today</p>
                                                </div>
                                                <div className="progress progress-bar-alt-success progress-sm">
                                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="77"
                                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '77%' }}>
                                                        <span className="visually-hidden">77% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>

                                            <h4 className="header-title mt-0 mb-4">Statistics</h4>

                                            <div className="widget-chart-1">
                                                <div className="widget-chart-box-1 float-start" dir="ltr">
                                                    <input data-plugin="knob" data-width="70" data-height="70"
                                                        data-fgcolor="#ffbd4a" data-bgcolor="#FFE6BA" value="80" data-skin="tron"
                                                        data-angleOffset="180" data-readOnly={true} data-thickness=".15" />
                                                </div>
                                                <div className="widget-detail-1 text-end">
                                                    <h2 className="fw-normal pt-2 mb-1"> 4569 </h2>
                                                    <p className="text-muted mb-1">Revenue today</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>

                                            <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

                                            <div className="widget-box-2">
                                                <div className="widget-detail-2 text-end">
                                                    <span className="badge bg-pink rounded-pill float-start mt-3">32% <i
                                                        className="mdi mdi-trending-up"></i> </span>
                                                    <h2 className="fw-normal mb-1"> 158 </h2>
                                                    <p className="text-muted mb-3">Revenue today</p>
                                                </div>
                                                <div className="progress progress-bar-alt-pink progress-sm">
                                                    <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="77"
                                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '77%' }}>
                                                        <span className="visually-hidden">77% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>

                                            <h4 className="header-title mt-0">Daily Sales</h4>

                                            <div className="widget-chart text-center">
                                                <div id="morris-donut-example" dir="ltr" style={{ height: '245px' }}
                                                    className="morris-chart"></div>
                                                <ul className="list-inline chart-detail-list mb-0">
                                                    <li className="list-inline-item">
                                                        <h5 style={{ color: '#ff8acc' }}><i className="fa fa-circle me-1"></i>Series A
                                                        </h5>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <h5 style={{ color: '#5b69bc' }}><i className="fa fa-circle me-1"></i>Series B
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <h4 className="header-title mt-0">Statistics</h4>
                                            <div id="morris-bar-example" dir="ltr" style={{ height: '280px' }} className="morris-chart">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <a href=" " className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href=" " className="dropdown-item">Action</a>
                                                    <a href=" " className="dropdown-item">Another action</a>
                                                    <a href=" " className="dropdown-item">Something else</a>
                                                    <a href=" " className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>
                                            <h4 className="header-title mt-0">Total Revenue</h4>
                                            <div id="morris-line-example" dir="ltr" style={{ height: '280px' }} className="morris-chart">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>



                    </div>





                </div>








                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> &copy; Adminto theme by <a
                                    href="https://coderthemes.com/" target="_blank" rel="noopener noreferrer">Coderthemes</a>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end footer-links d-none d-sm-block">
                                    <a href=" ">About Us</a>
                                    <a href=" ">Help</a>
                                    <a href=" ">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>





                <div className="offcanvas offcanvas-end right-bar" tabindex="-1" id="theme-settings-offcanvas">
                    <div data-simplebar className="h-100">

                        <div className="rightbar-title">
                            <a href=" " className="right-bar-toggle float-end">
                                <i className="mdi mdi-close"></i>
                            </a>
                            <h4 className="font-16 m-0 text-white">Theme Customizer</h4>
                        </div>


                        <div className="tab-content pt-0">

                            <div className="tab-pane active" id="settings-tab" role="tabpanel">

                                <div className="p-3">
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Customize </strong> the overall color scheme, Layout, etc.
                                    </div>

                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-bs-theme" value="light"
                                            id="light-mode-check" />
                                        <label className="form-check-label" for="light-mode-check">Light Mode</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-bs-theme" value="dark"
                                            id="dark-mode-check" />
                                        <label className="form-check-label" for="dark-mode-check">Dark Mode</label>
                                    </div>




                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Menus (Leftsidebar and Topbar) Positon</h6>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-leftbar-position" value="fixed"
                                            id="fixed-check" />
                                        <label className="form-check-label" for="fixed-check">Fixed</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-leftbar-position"
                                            value="scrollable" id="scrollable-check" />
                                        <label className="form-check-label" for="scrollable-check">Scrollable</label>
                                    </div>

                                    <div id="leftSidebar-color">

                                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Color</h6>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-color" value="light"
                                                id="light" />
                                            <label className="form-check-label" for="light-check">Light</label>
                                        </div>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-color" value="dark"
                                                id="dark" />
                                            <label className="form-check-label" for="dark-check">Dark</label>
                                        </div>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-color" value="brand"
                                                id="brand" />
                                            <label className="form-check-label" for="brand-check">Brand</label>
                                        </div>

                                        <div className="form-check form-switch mb-3">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-color"
                                                value="gradient" id="gradient" />
                                            <label className="form-check-label" for="gradient-check">Gradient</label>
                                        </div>
                                    </div>

                                    <div id="leftSidebar-size">


                                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Size</h6>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-size" value="default"
                                                id="default-size-check" />
                                            <label className="form-check-label" for="default-size-check">Default</label>
                                        </div>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-size"
                                                value="condensed" id="condensed-check" />
                                            <label className="form-check-label" for="condensed-check">Condensed <small>(Extra Small
                                                size)</small></label>
                                        </div>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-size" value="compact"
                                                id="compact-check" />
                                            <label className="form-check-label" for="compact-check">Compact <small>(Small
                                                size)</small></label>
                                        </div>


                                        <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Sidebar User Info</h6>

                                        <div className="form-check form-switch mb-1">
                                            <input type="checkbox" className="form-check-input" name="data-leftbar-user" value="true"
                                                id="sidebaruser-check" />
                                            <label className="form-check-label" for="sidebaruser-check">Enable</label>
                                        </div>
                                    </div>


                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-topbar-color" value="dark"
                                            id="darktopbar-check" />
                                        <label className="form-check-label" for="darktopbar-check">Dark</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="data-topbar-color" value="light"
                                            id="lighttopbar-check" />
                                        <label className="form-check-label" for="lighttopbar-check">Light</label>
                                    </div>

                                    <div className="d-grid mt-4">
                                        <button className="btn btn-primary" id="reset-layout">Reset to Default</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="rightbar-overlay"></div>

                <script src="assets/libs/jquery/jquery.min.js"></script>
                <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/libs/simplebar/simplebar.min.js"></script>
                <script src="assets/libs/node-waves/waves.min.js"></script>
                <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
                <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
                <script src="assets/libs/feather-icons/feather.min.js"></script>

                <script src="assets/libs/jquery-knob/jquery.knob.min.js"></script>

                <script src="assets/libs/morris.js06/morris.min.js"></script>
                <script src="assets/libs/raphael/raphael.min.js"></script>

                <script src="assets/js/pages/dashboard.init.js"></script>

                <script src="assets/js/app.js"></script>
            </div>
        </>
    );
}