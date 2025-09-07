import { Card, CardContent } from '@/components/ui/card';
import { CommitteeCardProps } from '@/types';

export const CommitteeCard: React.FC<CommitteeCardProps> = ({ committee, className = '' }) => {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}>
      <div className="relative h-64 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${committee.backgroundImage})` }}
        />
        
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-purple-600/30" />
        
        {/* Content Overlay */}
        <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight group-hover:text-purple-200 transition-colors">
              {committee.name}
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed opacity-90">
              {committee.description}
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
