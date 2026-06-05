import { useState } from "react";
import { GraduationCap, Calendar, RotateCcw, TrendingUp } from "lucide-react";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Retention data showing spaced repetition effect - Day 0, 1, 7, 30
const retentionData = [
  { day: 0, retention: 100 },
  { day: 1, retention: 40 },
  { day: 1, retention: 100 },
  { day: 2, retention: 60 },
  { day: 2, retention: 100 },
  { day: 4, retention: 80 },
  { day: 4, retention: 100 },
];

const HowItWorks = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="reveal-fade-up py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Science-Backed Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sifat uses proven cognitive techniques to help you remember forever
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Active Recall Card */}
          <div className="reveal-fade-up reveal-stagger-1 bg-card rounded-2xl p-8 card-shadow card-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Test Yourself</h3>
            </div>

            {/* Flashcard Demo with Flip Animation */}
            <div 
              className="relative h-48 mb-6 cursor-pointer perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${isFlipped ? '-rotate-y-180' : ''}`}>
                
                {/* Card Front - shows name */}
                <div className="absolute inset-0 bg-[#6B9BF7] rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 backface-hidden">
                  <span className="text-xl font-bold text-black tracking-wide mb-1">AR-RAHMAAN</span>
                  <span className="text-4xl font-bold text-black">الرَّحْمَٰنُ</span>
                  <div className="absolute bottom-4 flex items-center gap-2 text-xs text-black/70">
                    <RotateCcw className="w-3 h-3" />
                    <span>Tap to reveal meaning</span>
                  </div>
                </div>
                
                {/* Card Back - shows meaning */}
                <div className="absolute inset-0 bg-[#6B9BF7] rounded-2xl shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180">
                  <span className="text-2xl font-semibold text-black">The Most Gracious</span>
                </div>
                
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Regular practice is the key to remembering. Every time you recall a name, 
              it sticks better in your memory.
            </p>
          </div>

          {/* Spaced Repetition Card */}
          <div className="reveal-fade-up reveal-stagger-2 bg-card rounded-2xl p-8 card-shadow card-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Remember for Life</h3>
            </div>

            {/* Retention Graph */}
            <div className="h-36 mb-4 flex items-center">
              {/* Vertical Y-axis label */}
              <div className="h-full flex items-center justify-center pr-1">
                <span 
                  className="text-[10px] text-muted-foreground whitespace-nowrap font-medium"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Memory Retention
                </span>
              </div>
              
              {/* Chart */}
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={retentionData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="day" 
                    axisLine={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1 }}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(value) => {
                      if (value === 0) return 'Day 0';
                      if (value === 1) return 'Day 1';
                      if (value === 2) return 'Day 7';
                      if (value === 4) return 'Day 30';
                      return '';
                    }}
                    ticks={[0, 1, 2, 4]}
                    domain={[0, 4]}
                  />
                  <YAxis 
                    domain={[0, 100]}
                    axisLine={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1 }}
                    tickLine={false}
                    tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(value) => `${value}%`}
                    width={32}
                    ticks={[0, 50, 100]}
                  />
                  <Area
                    type="linear"
                    dataKey="retention"
                    stroke="#60A5FA"
                    strokeWidth={2}
                    fill="none"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Memory Strength Indicator */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <TrendingUp className="w-4 h-4" style={{ color: '#60A5FA' }} />
              <span className="text-sm text-foreground font-medium">Memory strength grows over time</span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mt-10">
              Learn new names everyday. Familiar ones space out naturally, strengthening your memory over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
