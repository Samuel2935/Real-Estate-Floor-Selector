import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {item.onClick ? (
            <button 
              onClick={item.onClick} 
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className={item.isActive ? "text-gray-900 font-medium" : ""}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};