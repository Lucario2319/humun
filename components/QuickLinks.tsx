import { ChevronRight } from 'lucide-react';
import { QUICK_LINKS, COLOR_CLASSES } from '@/constants';

const QuickLinks = () => {
  	return (
    	<section className="py-20 bg-gray-50">
      		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        		<div className="text-center mb-16">
          			<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            			Quick Access
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Everything you need to participate in our conference
					</p>
				</div>
        
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{QUICK_LINKS.map((link, index) => {
						const Icon = link.icon;
						return (
							<a
								key={index}
								href={link.href}
								className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-gray-200"
							>
								<div className={`w-16 h-16 bg-gradient-to-r ${COLOR_CLASSES[link.color as keyof typeof COLOR_CLASSES]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
									<Icon className="w-8 h-8 text-white" />
								</div>
								
								<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
									{link.title}
								</h3>
								
								<p className="text-gray-600 leading-relaxed">
									{link.description}
								</p>
								
								<div className="flex items-center mt-6 text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
									Learn More
									<ChevronRight className="ml-2 w-4 h-4" />
								</div>
							</a>
						);
					})}
				</div>
      		</div>
		</section>
  	);
};

export default QuickLinks;