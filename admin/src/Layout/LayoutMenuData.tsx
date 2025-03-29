import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound } from "lucide-react";

const menuData: any = [
    {
        label: 'Dashboard',
        isTitle: true,
    },
    // {
    //     id: "dashboard",
    //     label: 'Dashboards',
    //     link: "/#",
    //     icon: <MonitorDot />,
    //     subItems: [
    //         {
    //             id: 'analyticsdashboard',
    //             label: 'Analytics',
    //             link: '/dashboards-analytics',
    //             parentId: "dashboard"
    //         },
    //         {
    //             id: 'ecommercedashboard',
    //             label: 'Ecommerce',
    //             link: '/dashboard',
    //             parentId: "dashboard"
    //         },
    //         {
    //             id: 'emaildashboard',
    //             label: 'Email',
    //             link: '/dashboards-email',
    //             parentId: "dashboard"
    //         },
    //         {
    //             id: 'hrdashboard',
    //             label: 'HR',
    //             link: '/dashboards-hr',
    //             parentId: "dashboard"
    //         },
    //         {
    //             id: 'socialdashboard',
    //             label: 'Social',
    //             link: '/dashboards-social',
    //             parentId: "dashboard"
    //         },
    //     ]
    // },
    // {
    //     id: "landing",
    //     label: 'Landing Page',
    //     link: "/#",
    //     icon: <PictureInPicture2 />,
    //     subItems: [
    //         {
    //             id: 'onepage',
    //             label: 'One Page',
    //             link: '/onepage-landing',
    //             parentId: "landing"
    //         },
    //         {
    //             id: 'productlanding',
    //             label: 'Product',
    //             link: '/product-landing',
    //             parentId: "landing"
    //         }
    //     ]
    // },
    // {
    //     label: 'Apps',
    //     isTitle: true,
    // },
    // {
    //     id: 'chat',
    //     label: 'Chat',
    //     icon: <MessageSquare />,
    //     link: '/apps-chat',
    //     parentId: 2
    // },
    // {
    //     id: 'email',
    //     label: 'Email',
    //     icon: <Mail />,
    //     link: '/apps-mailbox',
    //     parentId: 2
    // },
    // {
    //     id: 'calendar',
    //     label: 'Calendar',
    //     link: "/#",
    //     icon: <CalendarDays />,
    //     subItems: [
    //         {
    //             id: 'default',
    //             label: 'Default',
    //             link: '/apps-calendar',
    //             parentId: 'calendar'
    //         },
    //         {
    //             id: 'monthgrid',
    //             label: 'Month Grid',
    //             link: '/apps-calendar-month-grid',
    //             parentId: 'calendar'
    //         },
    //         {
    //             id: 'multimonth',
    //             label: 'Multi Month Stack',
    //             link: '/apps-calendar-multi-month-stack',
    //             parentId: 'calendar'
    //         }
    //     ]
    // },
    // {
    //     id: "ecommerce",
    //     label: 'Ecommerce',
    //     link: "/#",
    //     icon: <ShoppingBag />,
    //     subItems: [
    //         {
    //             id: 'product',
    //             label: 'Products',
    //             parentId: 'ecommerce',
    //             subItems: [
    //                 {
    //                     id: 'listview',
    //                     label: 'List View',
    //                     link: '/apps-ecommerce-product-list',
    //                     parentId: 'product'
    //                 },
    //                 {
    //                     id: 'gridview',
    //                     label: 'Grid View',
    //                     link: '/apps-ecommerce-product-grid',
    //                     parentId: 'product'
    //                 },
    //                 {
    //                     id: 'overview',
    //                     label: 'Overview',
    //                     link: '/apps-ecommerce-product-overview',
    //                     parentId: 'product'
    //                 },
    //                 {
    //                     id: 'addnew',
    //                     label: 'Add New',
    //                     link: '/apps-ecommerce-product-create',
    //                     parentId: 'product'
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'shoppingcart',
    //             label: 'Shopping Cart',
    //             link: '/apps-ecommerce-cart',
    //             parentId: 'ecommerce'
    //         },
    //         {
    //             id: 'checkout',
    //             label: 'Checkout',
    //             link: '/apps-ecommerce-checkout',
    //             parentId: 'ecommerce'
    //         },
    //         {
    //             id: 'order',
    //             label: 'Orders',
    //             link: '/apps-ecommerce-orders',
    //             parentId: 'ecommerce'
    //         },
    //         {
    //             id: 'orderoverview',
    //             label: 'Order Overview',
    //             link: '/apps-ecommerce-order-overview',
    //             parentId: 'ecommerce'
    //         },
    //         {
    //             id: 'sellers',
    //             label: 'Sellers',
    //             link: '/apps-ecommerce-sellers',
    //             parentId: 'ecommerce'
    //         },
    //     ]
    // },
    // {
    //     id: "hr-management",
    //     label: 'HR Management',
    //     icon: <CircuitBoard />,
    //     parentId: "hrmanagement",
    //     link: "/#",
    //     subItems: [
    //         {
    //             id: 'employeelist',
    //             label: 'Employee List',
    //             link: '/apps-hr-employee',
    //             parentId: 'hrmanagement'
    //         },
    //         {
    //             id: 'holiday',
    //             label: 'Holidays',
    //             link: '/apps-hr-holidays',
    //             parentId: 'hrmanagement'
    //         },
    //         {
    //             id: 'leavesmanage',
    //             label: 'Leaves Manage',
    //             parentId: 'hrmanagement',
    //             subItems: [
    //                 {
    //                     id: 'byemployee',
    //                     label: 'By Employee',
    //                     link: '/apps-hr-leave-employee',
    //                     parentId: 'leavesmanage'
    //                 },
    //                 {
    //                     id: 'addleaveemployee',
    //                     label: 'Add Leave (Employee)',
    //                     link: '/apps-hr-create-leave-employee',
    //                     parentId: 'leavesmanage'
    //                 },
    //                 {
    //                     id: 'byhr',
    //                     label: 'By HR',
    //                     link: '/apps-hr-leave',
    //                     parentId: 'leavesmanage'
    //                 },
    //                 {
    //                     id: 'addleavehr',
    //                     label: 'Add Leave (HR)',
    //                     link: '/apps-hr-create-leave',
    //                     parentId: 'leavesmanage'
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'attendance',
    //             label: 'Attendance',
    //             parentId: 'hrmanagement',
    //             subItems: [
    //                 {
    //                     id: 'attendancehr',
    //                     label: 'Attendance (HR)',
    //                     link: '/apps-hr-attendance',
    //                     parentId: 'attendance'
    //                 },
    //                 {
    //                     id: 'mainattendance',
    //                     label: 'Main Attendance',
    //                     link: '/apps-hr-attendance-main',
    //                     parentId: 'attendance'
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'department',
    //             label: 'Department',
    //             link: '/apps-hr-department',
    //             parentId: 'hrmanagement'
    //         },
    //         {
    //             id: 'sale',
    //             label: 'Sales',
    //             parentId: 'hrmanagement',
    //             subItems: [
    //                 {
    //                     id: 'estimates',
    //                     label: 'Estimates',
    //                     link: '/apps-hr-sales-estimates',
    //                     parentId: 'sale'
    //                 },
    //                 {
    //                     id: 'payments',
    //                     label: 'Payments',
    //                     link: '/apps-hr-sales-payments',
    //                     parentId: 'sale'
    //                 },
    //                 {
    //                     id: 'expenses',
    //                     label: 'Expenses',
    //                     link: '/apps-hr-sales-expenses',
    //                     parentId: 'sale'
    //                 },
    //             ]
    //         },
    //         {
    //             id: 'payroll',
    //             label: 'Payroll',
    //             parentId: 'hrmanagement',
    //             subItems: [
    //                 {
    //                     id: 'employeesalary',
    //                     label: 'Employee Salary',
    //                     link: '/apps-hr-payroll-employee-salary',
    //                     parentId: 'payroll'
    //                 },
    //                 {
    //                     id: 'payslip',
    //                     label: 'Payslip',
    //                     link: '/apps-hr-payroll-payslip',
    //                     parentId: 'payroll'
    //                 },
    //                 {
    //                     id: 'createpayslip',
    //                     label: 'Create Payslip',
    //                     link: '/apps-hr-payroll-create-payslip',
    //                     parentId: 'payroll'
    //                 },
    //             ]
    //         },
    //     ],
    // },
    // {
    //     id: 'notes',
    //     label: 'Notes',
    //     icon: <ScrollText />,
    //     link: '/apps-notes',
    //     parentId: 2
    // },
    // {
    //     id: 'social',
    //     label: 'Social',
    //     icon: <RadioTower />,
    //     subItems: [
    //         {
    //             id: 'friends',
    //             label: 'Friends',
    //             link: '/apps-social-friends',
    //             parentId: 'social'
    //         },
    //         {
    //             id: 'event',
    //             label: 'Event',
    //             link: '/apps-social-event',
    //             parentId: 'social'
    //         },
    //         {
    //             id: 'watchvideo',
    //             label: 'Watch Video',
    //             link: '/apps-social-video',
    //             parentId: 'social'
    //         },
    //         {
    //             id: 'marketplace',
    //             label: 'Marketplace',
    //             link: '/apps-social-marketplace',
    //             parentId: 'social'
    //         }
    //     ]
    // },
    {
        id: 'belanja',
        label: 'Belanja',
        icon: <FileText />,
        parentId: 2,
        subItems: [
            {
                id: 'invoiceoverview',
                label: 'Overview',
                link: '/belanja/overview',
                parentId: 'belanja'
            },
            {
                id: 'belanjatable',
                label: 'Belanja',
                link: '/belanja',
                parentId: 'belanja'
            },
            // {
            //     id: 'invoiceaddnew',
            //     label: 'Add New',
            //     link: '/apps-invoice-add-new',
            //     parentId: 'belanja'
            // },
        
        ]
    },
    // {
    //     id: 'invoice',
    //     label: 'Invoices',
    //     icon: <FileText />,
    //     parentId: 2,
    //     subItems: [
    //         {
    //             id: 'invoicelistview',
    //             label: 'Listview',
    //             link: '/apps-invoice-list',
    //             parentId: 'invoice'
    //         },
    //         {
    //             id: 'invoiceaddnew',
    //             label: 'Add New',
    //             link: '/apps-invoice-add-new',
    //             parentId: 'invoice'
    //         },
    //         {
    //             id: 'invoiceoverview',
    //             label: 'Overview',
    //             link: '/apps-invoice-overview',
    //             parentId: 'invoice'
    //         }
    //     ]
    // },
    // {
    //     id: 'users',
    //     label: 'Users',
    //     icon: <UserRound />,
    //     parentId: 2,
    //     subItems: [
    //         {
    //             id: 'userlistview',
    //             label: 'List view',
    //             link: '/apps-users-list',
    //             parentId: 'users'
    //         },
    //         {
    //             id: 'usergridview',
    //             label: 'Grid View',
    //             link: '/apps-users-grid',
    //             parentId: 'users'
    //         }
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     isTitle: true,
    // },
    // {
    //     id: 'pages',
    //     label: 'Pages',
    //     icon: <Codesandbox />,
    //     parentId: 2,
    //     subItems: [
    //         {
    //             id: 'account',
    //             label: 'Account',
    //             link: '/pages-account',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'setting',
    //             label: 'Settings',
    //             link: '/pages-account-settings',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'pricing',
    //             label: 'Pricing',
    //             link: '/pages-pricing',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'faq',
    //             label: 'FAQs',
    //             link: '/pages-faqs',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'contactus',
    //             label: 'Contact US',
    //             link: '/pages-contact-us',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'comingsoon',
    //             label: 'Coming Soon',
    //             link: '/pages-coming-soon',
    //             parentId: 'pages'
    //         },
    //         {
    //             id: 'errorpage',
    //             label: 'Error Pages',
    //             parentId: 'pages',
    //             subItems: [
    //                 {
    //                     id: '404',
    //                     label: '404',
    //                     link: '/pages-404',
    //                     parentId: 'errorpage'
    //                 },
    //                 {
    //                     id: 'offline',
    //                     label: 'Offline',
    //                     link: '/pages-offline',
    //                     parentId: 'errorpage'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'maintenance',
    //             label: 'Maintenance',
    //             link: '/pages-maintenance',
    //             parentId: 'pages'
    //         },
    //     ]
    // },
    // {
    //     label: 'Components',
    //     isTitle: true,
    // },
    // {
    //     id: "uielement",
    //     label: 'UI Elements',
    //     link: "/#",
    //     icon: <LifeBuoy />,
    //     subItems: [
    //         {
    //             id: '1',
    //             label: 'Alerts',
    //             link: '/ui-alerts',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '2',
    //             label: 'Avatar',
    //             link: '/ui-avatar',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '3',
    //             label: 'Buttons',
    //             link: '/ui-buttons',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '4',
    //             label: 'Label',
    //             link: '/ui-label',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '5',
    //             label: 'Cards',
    //             link: '/ui-cards',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '6',
    //             label: 'Collapse',
    //             link: '/ui-collapse',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '7',
    //             label: 'Countdown',
    //             link: '/ui-countdown',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '8',
    //             label: 'Drawer',
    //             link: '/ui-drawer',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '9',
    //             label: 'Dropdown',
    //             link: '/ui-dropdown',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '10',
    //             label: 'Gallery',
    //             link: '/ui-gallery',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '11',
    //             label: 'Lists',
    //             link: '/ui-lists',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '12',
    //             label: 'Notification',
    //             link: '/ui-notification',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '13',
    //             label: 'Modal',
    //             link: '/ui-modal',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '14',
    //             label: 'Spinners',
    //             link: '/ui-spinners',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '15',
    //             label: 'Timeline',
    //             link: '/ui-timeline',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '16',
    //             label: 'Progress Bar',
    //             link: '/ui-progress-bar',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '17',
    //             label: 'Tooltip',
    //             link: '/ui-tooltip',
    //             parentId: "uielement"
    //         },
    //         {
    //             id: '18',
    //             label: 'Video',
    //             link: '/ui-video',
    //             parentId: "uielement"
    //         }
    //     ]
    // },
    // {
    //     id: 'plugin',
    //     label: 'Plugins',
    //     icon: <PackagePlus />,
    //     subItems: [
    //         {
    //             id: 'simplebar',
    //             label: 'Simplebar',
    //             link: '/plugins-simplebar',
    //             parentId: 'plugin'
    //         },
    //         {
    //             id: 'lightbox',
    //             label: 'Lightbox',
    //             link: '/plugins-lightbox',
    //             parentId: 'plugin'
    //         },
    //         {
    //             id: 'swiper',
    //             label: 'Swiper Slider',
    //             link: '/plugins-swiper-slider',
    //             parentId: 'plugin'
    //         },
    //         {
    //             id: 'scrollhint',
    //             label: 'Scroll Hint',
    //             link: '/plugins-scroll-hint',
    //             parentId: 'plugin'
    //         },
    //         {
    //             id: 'videoplayer',
    //             label: 'Video Player',
    //             link: '/plugins-video-player',
    //             parentId: 'plugin'
    //         },
    //     ]
    // },
    // {
    //     id: 'navigation',
    //     label: 'Navigation',
    //     icon: <LocateFixed />,
    //     subItems: [
    //         {
    //             id: 'navbar',
    //             label: 'Navbar',
    //             link: '/navigation-navbars',
    //             parentId: 'navigation'
    //         },
    //         {
    //             id: 'tabs',
    //             label: 'Tabs',
    //             link: '/navigation-tabs',
    //             parentId: 'navigation'
    //         },
    //         {
    //             id: 'breadcrumb',
    //             label: 'Breadcrumb',
    //             link: '/navigation-breadcrumb',
    //             parentId: 'navigation'
    //         },
    //         {
    //             id: 'pagination',
    //             label: 'Pagination',
    //             link: '/navigation-pagination',
    //             parentId: 'navigation'
    //         },
    //     ]
    // },
    // {
    //     id: "form",
    //     label: 'Forms',
    //     link: "/#",
    //     icon: <LifeBuoy />,
    //     subItems: [
    //         {
    //             id: 'basicform',
    //             label: 'Basic',
    //             link: '/forms-basic',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'validation',
    //             label: 'Validation',
    //             link: '/forms-validation',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'inputmask',
    //             label: 'Input Mask',
    //             link: '/forms-input-mask',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'select',
    //             label: 'Select',
    //             link: '/forms-select',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'checkbox-radio',
    //             label: 'Checkbox & Radio',
    //             link: '/forms-checkbox-radio',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'switches',
    //             label: 'Switches',
    //             link: '/forms-switches',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'wizard',
    //             label: 'Wizard',
    //             link: '/forms-wizard',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'file-upload',
    //             label: 'File Upload',
    //             link: '/forms-file-upload',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'datepicker',
    //             label: 'Date Picker',
    //             link: '/forms-datepicker',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'timepicker',
    //             label: 'Time Picker',
    //             link: '/forms-timepicker',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'colorpicker',
    //             label: 'Color Picker',
    //             link: '/forms-colorpicker',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'multi-select',
    //             label: 'Multi Select',
    //             link: '/forms-multi-select',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'input-spin',
    //             label: 'Input Spin',
    //             link: '/forms-input-spin',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'clipboard',
    //             label: 'Clipboard',
    //             link: '/forms-clipboard',
    //             parentId: "form"
    //         },
    //         {
    //             id: 'editor',
    //             label: 'Editor',
    //             link: '/forms-editor-classic',
    //             parentId: "form",
    //         },
    //     ]
    // },
    // {
    //     id: 'tables',
    //     label: 'Tables',
    //     icon: <Table />,
    //     subItems: [
    //         {
    //             id: 'basictable',
    //             label: 'Basic Table',
    //             link: '/tables-basic',
    //             parentId: 'tables'
    //         },
    //         {
    //             id: 'datatable',
    //             label: 'Datatable',
    //             link: '/tables-datatable',
    //             parentId: 'tables'
    //         }
    //     ]
    // },
    {
        id: "apexchart",
        label: 'Apexcharts',
        link: "/#",
        icon: <PieChart />,
        subItems: [
            {
                id: 'area',
                label: 'Area',
                link: '/charts-apex-area',
                parentId: "apexchart"
            },
            {
                id: 'bar',
                label: 'Bar',
                link: '/charts-apex-bar',
                parentId: "apexchart"
            },
            {
                id: 'boxplot',
                label: 'Boxplot',
                link: '/charts-apex-boxplot',
                parentId: "apexchart"
            },
            {
                id: 'bubble',
                label: 'Bubble',
                link: '/charts-apex-bubble',
                parentId: "apexchart"
            },
            {
                id: 'candlstick',
                label: 'Candlstick',
                link: '/charts-apex-candlstick',
                parentId: "apexchart"
            },
            {
                id: 'column',
                label: 'Column',
                link: '/charts-apex-column',
                parentId: "apexchart"
            },
            {
                id: 'funnel',
                label: 'Funnel',
                link: '/charts-apex-funnel',
                parentId: "apexchart"
            },
            {
                id: 'heatmap',
                label: 'Heatmap',
                link: '/charts-apex-heatmap',
                parentId: "apexchart"
            },
            {
                id: 'line',
                label: 'Line',
                link: '/charts-apex-line',
                parentId: "apexchart"
            },
            {
                id: 'mixed',
                label: 'Mixed',
                link: '/charts-apex-mixed',
                parentId: "apexchart"
            },
            {
                id: 'pie',
                label: 'Pie',
                link: '/charts-apex-pie',
                parentId: "apexchart"
            },
            {
                id: 'polar',
                label: 'Polar Area',
                link: '/charts-apex-polar',
                parentId: "apexchart"
            },
            {
                id: 'radar',
                label: 'Radar',
                link: '/charts-apex-radar',
                parentId: "apexchart"
            },
            {
                id: 'radialbar',
                label: 'Radialbar',
                link: '/charts-apex-radialbar',
                parentId: "apexchart"
            },
            {
                id: 'range-area',
                label: 'Range Area',
                link: '/charts-apex-range-area',
                parentId: "apexchart"
            },
            {
                id: 'scatter',
                label: 'Scatter',
                link: '/charts-apex-scatter',
                parentId: "apexchart"
            },
            {
                id: 'timelinechart',
                label: 'Timeline',
                link: '/charts-apex-timeline',
                parentId: "apexchart"
            },
            {
                id: 'treemap',
                label: 'Treemap',
                link: '/charts-apex-treemap',
                parentId: "apexchart"
            }
        ]
    },
    // {
    //     id: "icons",
    //     label: 'Icons',
    //     link: "/#",
    //     icon: <Trophy />,
    //     subItems: [
    //         {
    //             id: 'remix',
    //             label: 'Remix',
    //             link: '/icons-remix',
    //             parentId: "icons"
    //         },
    //         {
    //             id: 'lucide',
    //             label: 'Lucide',
    //             link: '/icons-lucide',
    //             parentId: "icons"
    //         }
    //     ]
    // },
    // {
    //     id: "maps",
    //     label: 'Maps',
    //     link: "/#",
    //     icon: <Map />,
    //     subItems: [
    //         {
    //             id: 'google',
    //             label: 'Google Maps',
    //             link: '/maps-google',
    //             parentId: "maps"
    //         },
    //         {
    //             id: 'leaflet',
    //             label: 'Leaflet Map',
    //             link: '/maps-leaflet',
    //             parentId: "maps"
    //         }
    //     ]
    // },
    // {
    //     id: "multilevel",
    //     label: 'Multi Level',
    //     link: "/#",
    //     icon: <Share2 />,
    //     subItems: [
    //         {
    //             id: 'level1',
    //             label: 'Level 1.1',
    //             link: '/#',
    //             parentId: "multilevel"
    //         },
    //         {
    //             id: 'level2',
    //             label: 'Level 1.2',
    //             link: '/#',
    //             parentId: "multilevel",
    //             subItems: [
    //                 {
    //                     id: 'level21',
    //                     label: 'Level 2.1',
    //                     link: '/#',
    //                     parentId: 'level2'
    //                 },
    //                 {
    //                     id: 'level22',
    //                     label: 'Level 2.2',
    //                     link: '/#',
    //                     parentId: 'level2'
    //                 },
    //             ]
    //         }
    //     ]
    // },

];

export { menuData };