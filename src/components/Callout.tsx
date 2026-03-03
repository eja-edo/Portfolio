import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
  title?: string;
}

export function Callout({ type = 'info', children, title }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-900 dark:text-blue-200',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-900 dark:text-yellow-200',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    error: {
      icon: AlertCircle,
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-900 dark:text-red-200',
      iconColor: 'text-red-600 dark:text-red-400',
    },
    success: {
      icon: CheckCircle,
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-900 dark:text-green-200',
      iconColor: 'text-green-600 dark:text-green-400',
    },
  };

  const { icon: Icon, bg, border, text, iconColor } = config[type];

  return (
    <div className={`${bg} ${border} ${text} border-l-4 p-4 my-4 rounded-r`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={iconColor} size={20} />
        </div>
        <div className="ml-3">
          {title && <p className="text-sm font-medium mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
