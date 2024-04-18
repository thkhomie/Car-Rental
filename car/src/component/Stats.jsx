import { STATS_DATA } from "../data/Data";
import StatsCard from "../card/StatsCard";

export default function Stats(){
    return(
        <section>
            <div className="max-w-screen-xl flex justify-around mx-auto flex-wrap">
                {STATS_DATA.map((item) => (
                    <StatsCard 
                    key={item.label}
                    iconUrl={item.iconUrl}
                    count={item.count}
                    label={item.label}/>
                ))}
            </div>
        </section>
    )
}