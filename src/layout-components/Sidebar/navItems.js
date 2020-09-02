import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import GradeTwoTone from '@material-ui/icons/GradeTwoTone';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

var iconsMap = {
  BarChartIcon: BarChartIcon,
  CalendarTodayIcon: CalendarTodayIcon,
  ChatIcon: ChatIcon,
  CodeIcon: CodeIcon,
  DashboardIcon: DashboardIcon,
  ErrorIcon: ErrorIcon,
  FolderIcon: FolderIcon,
  DashboardTwoToneIcon: DashboardTwoToneIcon,
  GradeTwoTone: GradeTwoTone,
  ListAltIcon: ListAltIcon,
  LockOpenIcon: LockOpenIcon,
  MailIcon: MailIcon,
  PresentToAllIcon: PresentToAllIcon,
  PeopleIcon: PeopleIcon,
  PersonIcon: PersonIcon,
  ReceiptIcon: ReceiptIcon,
  SettingsIcon: SettingsIcon,
  ViewModuleIcon: ViewModuleIcon
};

export default [
  {
    label: 'Access Granted',
    content: JSON.parse(
      `[
  {
    "label": "Dashboard",
    "icon": "DashboardTwoToneIcon",
    "content": [
      {
        "label": "KYF Dashboard",
        "description": "This is a dashboard page example built using this template.",
        "to": "/DashboardDefault"
      },
       {
        "label": "Annual Reports",
        "description": "Annual Reports Data",
        "to": "/Murray"
      }
    ]
  },
  {
    "label": "Elements",
    "icon": "SettingsIcon",
    "content": [
      {
        "label": "Scrollable",
        "description": "Add scrolling areas to any elements with custom scrollbars or default browser ones.",
        "to": "/Scrollable"
      }
    ]
  },
  {
    "label": "Plugin Widgets",
    "icon": "ReceiptIcon",
    "content": [
      {
        "label": "Tabs",
        "description": "Tabs are used to split content between multiple sections. Wide variety available.",
        "to": "/Tabs"
      }
    ]
  },
  {
    "label": "Forms Elements",
    "icon": "BarChartIcon",
    "content": [
      {
        "label": "Controls",
        "description": "Wide selection of forms controls, using a standardised code base, specifically for React.",
        "to": "/FormsControls"
      }
    ]
  },
  {
    "label": "Others",
    "icon": "ChatIcon",
    "content": [
      {
        "label": "Apex Charts",
        "description": "Wonderful animated charts built with ApexCharts components.",
        "to": "/ApexCharts"
      },
      {
        "label": "Maps",
        "description": "Implement in your applications Google or vector maps.",
        "to": "/Maps"
      },
      {
        "label": "List Groups",
        "description": "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
        "to": "/ListGroups"
      }
    ]
  }
]`,
      (key, value) => {
        if (key === 'icon') {
          return iconsMap[value];
        } else {
          return value;
        }
      }
    )
  }
];
