import { IArticle } from '../shared/interfaces/articles'
import { convertSpacesToDash } from '../shared/utils/text'


export const ARTICLES: IArticle[] = [
  {
    title: 'eth2 deposit launchpad — An interface for the first world computer',
    date: 'Sep 30, 2020',
    author: 'Andrej Berlin',
    description:
      'When you start your computer you press a power button to get electricity to flow through its internal circuits. The power button of the world computer is an interface, that will help you become part of the circuitry. Here is how it will look and generate money for you in the future.',
    link: `${convertSpacesToDash('eth2 deposit launchpad — An interface for the first world computer')}`,
    image: "https://deepworkphotos.s3.us-east-2.amazonaws.com/1.png",
    content: `
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-one.jpg" alt="image one" />
        </figure>
        <div>
          <section><p>When you start your computer you press a power button to get electricity to flow through its internal circuits. The power button of the world computer is an interface, that will help you become part of the circuitry. Here is how it will look and generate money for you in the future. We had the chance to work on an interface that’s required to kick-start the most advanced version of a world computer. In the following post I will briefly outline what makes Ethereum a world computer, write about the novel UX challenges for blockchain user interfaces and describe some approaches to solutions. If you’re already familiar with Ethereum and how it works, feel free to skip the first paragraph.</p></section>
          <section>
              <h2>A brief intro to world computers — Ethereum 1</h2>
              <p>If you compare Bitcoin and Ethereum there is one significant difference. While the Bitcoin blockchain merely <strong>stores information on transactions</strong> within the network (it’s like a distributed USB flash drive), Ethereum lets people <strong>interact with the data on the blockchain</strong> and write software, that automates those interactions (like an operating system on a computer). So it’s almost like a mix of a regular computer and bitcoin.</p>
          </section>
          <section>
              <article>
                <p>As an example, your computer at home can do something super simple like:</p>
                <p><em>If I receive an Email from Dave, then forward it straight to the spam folder.</em></p>
              </article>
              <article>
                <p>A basic blockchain can use multiple computers to e.g. verify and store a transaction:</p>
                <p><em>If Dave sends me one coin and it’s real, then accept and save it on the distributed storage.</em></p>
              </article>
              <article>
                <p>And Ethereum, or any &quot;world computer&quot; combines those two:</p>
                <p><em>If Dave’s sends me more than 20 coins and they are all real, then forward them straight to Rob.</em></p>
              </article>
              <p>As you can see, this has never existed before and the opportunities might not be self evident, apart from the automation of what already exists and costs a lot of manual labour. What is important to note here though, is that <strong>you don’t need to trust humans</strong> in this process and especially financial transactions become much more secure, because it’s a program and everyone can see how the it works by reading the code. </p>
          </section>
          <section>
              <h2>Why does it always have to do with money?</h2> 
              <p>Because the world computer allows us to create a similar concept to what we call money, except online and there is no way you can duplicate or counterfeit it. It’s currently the lowest hanging fruit of the technology.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-two.png" alt="image two" />
            <figcaption>Proof of work requires a lot of computers to solve complicated mathematical problems, which costs a lot of electricity</figcaption>
        </figure>
        <div>
          <section>
            <p>In addition, running a single computer costs money, and if we want a lot of computers to run, someone will have to pay. In fact, the problem with this world computer so far has been that <strong>running it is very expensive</strong>. In order to make sure e.g. that the coin Dave sent is <strong>unique</strong> on the entire network you need a lot of people running their home computers to verify the transactions. With every transaction you make, you pay a fee that goes to these people — but the more transactions on the network, the more energy is required to run the network. Currently, running Ethereum costs approximately as much as keeping the lights on in <a href="https://digiconomist.net/ethereum-energy-consumption" target="_blank">Luxembourg</a>.</p>
            <p><strong>The energy consuming part of what sustains the network is called &quot;proof of work&quot; and it’s finally come to an end, being superseded and replaced by &quot;proof of stake&quot;.</strong></p>
          </section>
        </div>
        <div>
            <section>
                <h2>Low energy consumption — Ethereum 2</h2>
                <p>With eth2, its developers have come up with a new method to sustain the network. Instead of being based on energy consuming work, it’s a mathematical approach that requires money staked. Each computer taking part in the network gets rewarded for agreeing with the others on what’s currently happening on the network. If a participant doesn’t take part in this mechanism or tries to deceive it, it gets penalised. Because people want to use the network, the former case will happen more often and will make you money. In short, that’s why it’s called &quot;proof of stake&quot;.</p>
            </section>
        </div>
        <figure>
          <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-three.png" alt="image three" />
          <figcaption>Proof of Stake requires staking money instead of calculations</figcaption>
        </figure>
        <blockquote>
            <p>Once enough validators have signed up, the network will be activated and the world computer will start running efficiently.</p>
            <p>This transition is what I’m writing here about, because this is what we worked on.</p>
        </blockquote>
        <div>
            <section>
              <h2>What are the main challenges in the transition?</h2>
              <h3>How do we motivate people to stake?</h2>
              <p>Letting people give away $5,500 with no guarantee of return is difficult, especially in a system where a little mistake can lead to a complete loss of funds. There are no examples of online places where people are asked to pay money and wait for another year until they get it back, just because they trust the system. We needed to make sure everything is understandable and convincing. Apart from many different online resources and the fact that Ethereum is the largest open source software in the world, there were a few visual methods:</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-four.png" alt="image four" />
        </figure>
        <div>
          <section>
            <p>Visualising a reward structure is certainly not the simplest way, but especially for visitors familiar with the Ethereum network showing the approximate reward for staking at a specific time is a solid motivation to stake. Because, if you remember from above, this is all trustless software. <strong>No humans are part of making decisions</strong> about payouts.</p>
            <article>
                <p><em>If the network reaches 500,000 ETH, then everyone gets a reward based on when they staked.</em></p>
            </article>
          </section>
        </div>
        <div>
          <section>
              <h2>How do we make it safe to use</h2>
              <p>We needed to teach users a lot during the process of becoming a validator. We don’t know how much background information people have and what they already know. Ideally, we want to avoid the chance of people making mistakes.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-five.png" alt="image five" />
        </figure>
        <div>
            <section>
                <p>Many warnings that specifically point out the caveats but don’t sound too frightening follow throughout the flow.</p>
                <p>We know from user interfaces about warning messages and explanatory sections, but on a low level <strong>we introduced &quot;deliberate friction&quot;</strong> in the user experience. Most people are used to extremely fast processes and check-outs as popularised by Amazon, Google, Facebook etc. which make people think as little as possible while interacting with them.</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-six.png" alt="image six" />
        </figure>
        <div>
          <section>
              <p>On the landing page we made it look very simple and fast, but right in the beginning of the validator set up process we wanted to slow people down, while constantly providing justifications for why everything takes a bit more time suddenly. In this place it’s also a good idea to constantly tease with the reward in the end.</p>
          </section>
        </div>
        <div>
            <section>
              <h2>How do we avoid phishing attacks?</h2>
              <p>An interface which individuals will use to transfer several thousand dollars is an inviting place to attempt hijacking accounts. Or copying the website to have uninformed people transfer the money to a malicious person.</p>
            </section>
        </div>
        <figure>
          <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-seven.png" alt="image six" />
        </figure>
        <div>
          <section>
            <p>Warnings are helpful, but if the whole website can be copied, even those could be faked. Apart from being generally helpful advice for navigating through the internet, here are a few ways how you can make sure the staking website is legit:</p>
            <ol>
              <li><strong>Only visit the site from authorised sources</strong>. This could be the official <a href="https://twitter.com/ethereum" target="_blank">Ethereum twitter</a> account, the official <a href="https://ethereum.org/" target="_blank">Ethereum website</a> or any other source <strong>you personally trust</strong>.</li>
              <li><strong>The contract will have an immutable ENS address but you still have to take care</strong>. Most likely the address of the contract which receives the money will have a specific ENS address (similar to a URL rather than a random string of letters and numbers) and the contract will have many incoming 32 ETH transactions. You can check that on <a href="https://etherscan.io/" target="_blank">etherscan.io</a> So to avoid sending money to a malicious contract, <strong>type the deposit contract by hand</strong> into etherscan and <strong>compare if the transaction history on etherscan is the same</strong> as for the address you are sending to in Metamask (or any other wallet provider). It should show a lot of 32 ETH transactions. <strong>Please don’t copy-paste</strong> you might copy a slightly similar looking address with a Greek or Russian letter, instead of the correct address.</li>
              <li><strong>Let someone help you do it</strong>. If you think this is too complicated, ask a friend who understands all this to help you out.</li>
              <li>The Ethereum Foundation will <strong>publish the contract address and details at an event</strong>. This will be a trusted source, so if you happen to be at an Ethereum conference, look out for the deposit launchpad details.</li>
            </ol>
          </section>
        </div>
        <div>
            <section>
              <h2>Together into a future with a world computer</h2>
              <p>We designed this interface in a team of 9 people within a few weeks but countless more people are involved in putting it together, building the front- and backend and releasing it into the public. But this is just the beginning, the actual world computer can only run if we all cooperate and make it happen.</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-one-img-eight.png" alt="image seven" />
        </figure>
        <div>
            <section>
              <p>We hope that this piece of interface allows for as many people as possible to support the network but eventually it depends on anyone who wants it to be real. There are many applications for it, that can improve the world we all live in:</p>
              <ul>
                <li>Paying work in the actual relation to the significance of the problems it solves</li>
                <li>Removing bureaucratic processes and speed up global collaboration</li>
                <li>Transacting and translating value across countries and currencies</li>
                <li>Assigning value to digital assets</li>
                <li>Sending money through time</li>
                <li>Keeping your personal data really safe</li>
                <li>Let the public contribute to political decisions</li>
              </ul>
              <p>Most of these applications already exist in some form in small spaces but with the efficiency of the new Ethereum network they can reach interplanetary scale.</p>
              <p>Let us know if you have any questions and what you think!</p>
            </section>
        </div>
        <footer>
          <p>You can follow us on Medium or some social media platforms for more:</p>
          <p>Instagram: <a href="http://instagram.com/deepwork.studio" target="_blank">@deepwork.studio</a>
          <p>Twitter: <a href="https://twitter.com/deepwork_studio" target="_blank">twitter.com/deepwork_studio</a>
          <p>Or join us on Telegram: <a href="https://t.me/designdeepwork" target="_blank">Telegram</a>
        </footer>
`,
  },
  {
    title: 'How a new type of experiential psychological therapy and meditation changed my life',
    date: 'Jul 31, 2020',
    author: 'Charlie Ellington',
    description:
      'I’ve written a deeply personal post on mental health, meditation and therapy. I’m hoping sharing the techniques influences others in a dark place. Or, used as I do now as an awesome tool for creativity, productive work and a life full of awesome challenges.',
    link: `${convertSpacesToDash(
      'How a new type of experiential psychological therapy and meditation changed my life'
    )}`,
    image: "https://deepworkphotos.s3.us-east-2.amazonaws.com/2.png",
    content: `
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-one.png" alt="image one" />
        </figure>
        <div>
            <section>
              <h2>An introduction to Internal Family Systems (IFS) and Health First Business</h2>
              <p><a href="https://open.spotify.com/show/6zij9sXdWyfxYd0ubsPacc" target="_blank">Work Smart, Live Balanced</a> from Charlie at Deep Work</p>
              <p>Internal Family Systems (IFS) is a new model (around thirty years which is new in it’s field) of evidence-based psychotherapy. I’ve been practicing it for almost a year. Starting with incredibly challenging, yet powerfully transformative, one-on-one sessions with a therapist. To developing a daily practice that combines meditation with IFS tools. The experience has been life changing. My new practice pays dividends in a balanced happy life and working at a superhuman smart level.  I’m going to document my own experience. The lows to highs. My hope is that it encourages those in a darker place to start their own quest. Or those who don’t feel they need any kind of ‘therapy’ on a journey of self discovery. Gaining a set of life and work enhancing tools.</p>
            </section>
        </div>
        <div>
            <section>
                <h2>My Story</h2>
                <p>I’ve suffered anxiety and depression throughout times in my life. In the summer of 2019 I found myself in one of the toughest places I’d ever been. The best way to describe my mental state is from that of a part or version of me (more on parts later). Let’s call this part Analytical Charlie. Analytical Charlie felt incredible worry for the state of my life, work and relationship. It felt they were all about to fall apart and collapse. As a result, this part attempted to solve the problem. Repeatedly. A standard day consisted of; waking up, feeling anxious, my part trying to work out why, finding a problem (such as that my relationship didn’t fit my values), then trying to analyse and solve it. To take the example of the relationship. It solved it by suggesting to leave it. This introduced another more aggressive part incredibly scared of leaving the relationship. This would cause my mind and body to ‘shut down’*.</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-two.png" alt="image two" />
            <figcaption><em>*’Shut down' – is my own term I’ve made up to describe the sensation – it’s not technical or scientific. Not real image of the situation.</em></figcaption>
        </figure>
        <div>
            <section>
                <p>Shut down meant not talking to anyone, doing anything to avoid the issue or thinking about it. This would consist of working (unproductively) or scrolling my phone (a constant loop of emails, news sites, instagram, or whatever could distract).</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-three.png" alt="image three" />
        </figure>
        <div>
            <section>
                <p>The above analysis of the situation comes from the IFS work with a therapist. At the time I did not understand the dynamic I was simply ‘stuck’ in shutdown. There’s a few more parts to introduce to piece it all together. But first, we need a little more understanding of IFS.</p>
            </section>
        </div>
        <div>
            <section>
              <h2>What is a part?</h2>
              <p>IFS follows the model that our minds are naturally multiple. This is not multiple personality disorder but a genuine good, and powerful, thing. The best basic description I tell friends is imagining the following situation. You have a part that wants to go for a run. Then when it comes to it, you also want to open a beer, watch tv and eat chocolate – another part or parts. There’s then a little battle and one part wins. Hopefully you go for a run! Parts are not all battle and conflict. In fact the overall system of parts is the complete opposite:</p>
              <aside>
              <p><em>&quot;Our inner parts contain valuable qualities and our core Self knows how to heal, allow us to become integrated and whole. In IFS all parts are welcome&quot;</em><strong> – Dr Richard Schwartz</strong></p>
              </aside>
              <p>In IFS we each have multiple personalities or parts that interact with each other just as communities or people do. It is internal rather than external that make up our ‘self’. In IFS therapy you work to identify different parts. Each is present depending on the situation or experience. They have their own unique resources, power and talent that can be utilised. Challenges come when a part becomes dysfunctional or hidden. This is often the result of experiencing trauma, external criticism or an unhealthy experience or attachment to primary caregivers (e.g. our parents). When this happens we can divide parts into three different categories.</p>
          </section>
        </div>
        <div>
            <section>
              <h2>Categories of Parts</h2>
              <p><strong>Managers</strong> – Keep our self or system running on a day to day basis. Keeping us away from danger and functioning. They could be preventing negative feelings such as abandonment or rejection. <strong>Firefighters</strong> – These are re-active parts. These can be much more extreme than managers. Often coming into play to protect Exiled parts. Firefighters can manifest in extreme forms such as addiction and self-harm. <strong>Exiles</strong> – Often deeply hidden by the managers and firefighters. They carry emotional memories holding feelings such as shame, vulnerability or fear. This could be as a result of emotional trauma. If the exile experienced something as a young child, that today feels insignificant, it could/would have been incredibly dramatic to the child. The managers and firefighters hide these vulnerable parts often out of fear of re-experience the feeling or pain it felt at the time. To recap; managers keep us functioning, fire-fighters come into force in extreme situations to keep us from revealing an exile. In my story above, you might be able to recognise a manager and firefighter.</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-four.png" alt="image four" />
        </figure>
        <div>
          <section>
              <h2>Therapy</h2>
              <p>Stuck on the sofa and barely able to move. I was fortunate enough to have friends, a partner and family to push me into action. I was introduced to a therapist, <a href="http://www.davidkitchings.com/" target="_blank">David</a>, and we started sessions straight away. The first thing that struck me is how transformative and fast the process is. In a few weeks we’d uncovered a system of firefighters, managers and exiles and my life began to change. I could write for pages detailing the process, but recommend further reading from experts to get true understanding. To skip ahead I’ll describe the parts above and the system I experienced.</p>
          </section>
        </div>
        <figure>
          <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-five.png" alt="image five" />
          <figcaption>
          <i>Recommended further reading: Inner Harmony by Beth Rogerson, PhD</i> <em>– It’s very short yet gives a holistic overview.</em>
          </figcaption>
        </figure>
        <div>
            <section>
                <p>I had a manager, an incredible analytical part that was trying very hard to solve the problem in my relationship. It did incredible work and concluded that I was best not in it. At that moment, enter fire-fighter… The firefighter kicks in and sticks me to the sofa. Distracting away from the analytical manager in anyway possible. Leaving the relationship is a total no go, but why?</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-six.png" alt="image six" />
        </figure>
        <div>
            <section>
                <p>This is where IFS therapy gets tough. As you have to dialogue with the managers and fire-fighters to give space and show you the exiles. In this case, I found two younger parts of me. I found it by experiencing a pain/feeling in my abdominal as I felt the stress of the firefighter. The most important part was a young child around the age of eight. Dialoguing with it showed old memories of being at school.</p>
            </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-seven.png" alt="image seven" />
        </figure>
        <div>
            <section>
                <p>This experience of the therapy was particularly tough. Cue thirty year old crying in front of a zoom call to a therapist. When you discover exiled parts and they open up, you experience the same emotion that they felt in that time and place. The great thing about the therapy is you can then show then the reality of the situation. It is no longer that time and place. Showing how you can help them as a whole system. In this case, the experience of doing so was one of the most euphoric of my life. The young boy inside of me let go of a lot of emotion. Accepted himself as a little different (one of the things that came up was a shame around not liking football and feeling lonely as a result). With my adult parts available to hold space and support. A few days after this experience, I felt a wave of happiness as we went swimming in the sea together.</p>
            </section>
        </div>     
        <figure>           
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-eight.png" alt="image eight" />
        </figure>
        <div>
            <section>
                <p>On a hike with family, we got to the beach, not giving a sh*t about what other people thought anymore, I stripped off and jumped in. With now towel, I had the odd look whilst drying off and walking on a cold English day. Couldn’t be happier.</p>
            </section>
        </div>
        <div>
          <section>
              <h2>Difference to other psychotherapy</h2>
              <p>In the past I’ve tried different therapy. Including psychotherapist‎, coaches and cognitive behavioural therapy (CBT). From my research and experience I can now see how they only touch the surface. They helped from a dark place at the time, but it was only when I did IFS did I experience transformational change. Traditional therapy, coaches and CBT all talked to my wonderful and amazing analytical manager part. Helping to solve, understand and justify the situation and past experience. None of it looked into the root cause. Even in traditional psychotherapy which did show the childhood experience, it was only to understand them from an analytical point of view. I could call this the band-aid approach.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-nine.png" alt="image nine" />
        </figure>
        <div>
            <section>
                <p>The difference in IFS is the experiential nature. You feel the true emotion and relive a past trauma. It can be incredibly difficult, but as a result it’s hugely impactful. When I’ve discovered younger parts and exiles I have relived the trauma and emotion from the time and place. By doing it, we unburden the part and it takes on a new experience (more on that in a second).</p>
            </section>
        </div>
        <div>
          <section>
            <h2>A note on psychedelics</h2>
            <p>Listening to friends who have taken psychedelics from a therapeutic point of view, I have seem incredible parallels and similarities in their experience. <em>I have not taken, nor am I in anyway an expert, so please take this as an observation rather than fact. Nothing here is a recommendation or encouragement. If you are interested in understanding psychedelics I highly recommend &quot;The Psychedelic Explorer’s Guide&quot; by James Fadiman, Ph.D.. I also recommend reading <a href="http://tripsafe.org/" target="_blank">TripSafe.org</a> (<a href="https://tripsafe.org/how-to-take-shrooms/" target="_blank">https://tripsafe.org/how-to-take-shrooms/</a>) alongside this research article – Human Hallucinogen Research: Guidelines for Safety (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3056407/" target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3056407/</a>) – on safely taking psychedelics.</em> Friends describe feeling sensations in the body and reliving past experiences. Or psychedelics allow them to go to past experiences or &quot;energy blockages&quot; in the body. Sometimes this can be emotional tough – ‘a bad trip’. In my experience I can assume this should not be called a ‘bad’ trip. It is the psychedelics allowing you to access more of your mind and system of self. Pointing you in the direction where you need to do healing or are neurologically (&quot;energetically&quot;) blocked. For example, going straight to a younger part or exile. By experiencing the pain, the tripper can then unburden or integrate it into everyday life. To me, this sounds just like a much faster version of IFS. Getting straight to the point. On that note, and my understanding of IFS, you can easily identify the risks. IFS goes through a well practiced and developed unburdening experience. You can then integrate the parts experience back in a healthy way. I’ve heard of people finding the part during a trip, then getting stuck there for days, weeks or even months. Looping and experiencing only that part is called ‘being burdened by a part’. Again, that’s not negative, it allows me to assume the combination of psychedelics and IFS could be extremely powerful. The psychedelics allowing managers and fire-fighters to open space to find trauma, relive experiences and un-bloc. Then to use IFS to integrate back into a whole system and live a more furling life with a balanced powerful system.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-ten.png" alt="image ten" />
            <figcaption><i>For a deeper dive on combining psychedelics and IFS, there is a <a href="https://www.mayahealth.com/podcast/richard-c-schwartz" target="_blank">brilliant podcast</a> with the founder of IFS on the subject. From the Podcast description:</i> <em>&quot;Dick is bullish about psychedelics as a way of accessing and understanding these different subpersonalities or 'parts' and believes that IFS can be a helpful topography for anyone doing psychedelic-assisted therapy.&quot;</em></figcaption>
        </figure>
        <div>
          <section>
            <h2>A new experience</h2>
            <p>Unburdening this younger part meant that my managers and fire-fighters could relax. Their role no longer reflected the reality. In the therapy they’re given new roles. Not hiding or shaming a younger part, but being ready for real life adult situations. For example, I now see my analytical part in its powerful form. Being able to solve complex problems – be it in business or product design. Taking on vast amounts of information, creatively exploring options and coming up with solutions. I see this now as a powerful gift, rather than a burden. It gives me a competitive advantage to understand this part and utilise it. Combined with dedicated practice (See Cal Newport’s Deep Work) makes me produce exceptional work. My younger part shows me how I don’t have to enjoy traditional masculine sports such as football. I can happily enjoy swimming and sailing. If I now visit this part it encourages me to swim in the sea. Something we then do together and deeply enjoy. The part that shut’s down now makes sure I exercise, spend time in nature, connect and communicate with people and more. All the things that cause me to dive into analytical state in my head and cause negative emotions that result in shut-down.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-eleven.png" alt="image eleven" />
        </figure>
        <div>
          <section>
            <h2>Continued Therapy</h2>
            <p>In this story I have highlighted only a few parts and one particular unburdening experience. There have been many more. Some deeper and harder. In total I did around six months working one on one with a therapist with a session once a week. Sometimes we did a session twice a week if we needed to unburden a particular situation so I wasn’t overwhelmed. This was not easy. Unwrapping the layers above only found deeper layers. In its extreme I found a total suppression and blockage of a part of my sexuality. In it’s real extreme, this emotional or mental blockage had even manifested into a physical form… I had a 3cm long cist in the left side of my neck. Based on no scientific evidence (so please take with a pinch of salt) I can describe my experience and understanding: I can pin point a time when I began to heavily suppress a part of my personality out of shame and fear of not being accepted. At roughly the same time, I first noticed the cist on my neck. This began to grow over a short period as part of me started to push me to live a more authentic life. From my IFS therapy, I can now understand when this push for authenticity happened, another part pushed hard to exile another part. Doing anything possible for me to not go there. It worked so hard at suppressing the energy it physically manifested as the cist growing. Eventually we unblocked it with the therapy. At roughly the same time I had the cist removed due to excessive growth. There is far less shame and I live much closer to a fully authentic version of myself.</p>
          </section>
        </div>
        <div>
          <section>
            <h2>Daily Practice</h2>
            <p>With all my parts above, and more, I visit them everyday as part of my personally developed meditation practice. Every morning, after a coffee to make it a habit, I take a seat and meditate for roughly 30 minutes. During this time I actively talk to all my parts and what they’re experiencing. I recently found the process could be described as ‘active imagination’ – an idea originally developed by Carl Jung between 1913 and 1916.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-twelve.png" alt="image twelve" />
            <figcaption><a href="https://en.wikipedia.org/wiki/Active_imagination" target="_blank">Taken from wikipedia to describe Active Imagination</a> - <em>– &quot;As developed by Carl Jung between 1913 and 1916,[a3] active imagination is a meditation technique wherein the contents of one’s unconscious are translated into images, narrative or personified as separate entities. It can serve as a bridge between the conscious 'ego' and the unconscious. This often includes working with dreams and the creative self via imagination or fantasy. Jung linked active imagination with the processes of alchemy. Both strive for oneness and inter-relatedness from a set of fragmented and dissociated parts.&quot; </em><i>– Sounds a lot like IFS!</i></figcaption>
        </figure>
        <div>
          <section>
              <p>Occasionally this is a tough process and I’m working through difficult emotions or parts that are triggered by external situations or events. In this case, rather than feeling overwhelmed, stressed or emotional, I can help the parts. With help from the whole system. Before I did this practice I could be a ‘mood’ for a whole day. For example, feeling stressed and unable to focus on a work task. Other times this process can be a source of powerful creativity. Either through parts that have different voices conflicting and finding compromise between extremes to focus on the best solution. Or, to identifying a deeper wealth of information or new idea by asking parts for input.</p>
          </section>
        </div>
        <div>
          <section>
            <h2>Changes it makes to life balance and working like a super human</h2>
            <p>To highlight how this 30 minute practice has significant impact on my day to day to life, it’s best to describe some before and after situations: <strong>In Work: Business Communication:</strong> Before: Fear of conflict After: Getting on the phone to Andrej (co-founder) and knowing if we explain are authentic point of view, we’ll always resolve a situation. <strong>In Work: Creativity:</strong> Before: Stagnation in the business After: A wealth of new ideas coming up in the meditation. Using my parts, the ability to prioritise them according to my values. <strong>In Life: Relationship:</strong> Before: Dis-functioning through fear of communicating my truth. No communication, equals no attraction. After: Understanding where my feelings and emotions come from. Being able to communicate and express them from the part that is experience it. Opening up communication in the relationship. This list could go on but these are three core examples. Please reach out to me if you’d like more!</p>
          </section>
        </div>
        <div>
          <section>
            <h2>Where to Start",
            <p><strong>Therapy</strong> If IFS resonated with you and your personal situation, I highly recommend starting work with a therapist. The IFS Institution has a list of practitioners. I can also help with personal recommendations. <a href="https://ifs-institute.com/practitioners" target="_blank">ifs-institute.com/practitioners</a> I can honestly say it’s one of the best investments I’ve ever made. Paying dividends in emotional balance, a happy life balance and even financially – allowing me to run Deep Work more effectively, creatively and enjoyably. <strong>Beginners Meditation</strong> If you wish to touch on the very 1% which has the most impact on life. I suggest getting started with a daily meditation practice. Apps such as Headspace are a good place to start. <strong>Advanced Active Meditation</strong> The process I use is developed uniquely. My suggestion is to work with an IFS practitioner to develop your own way. In the future, I’d love to create a more instructional guide. If that’s of interest, please do reach out to talk one on one and help me develop it. For Carl Jung’s method of ‘Active Imagination’ please see <a href="https://www.envisionyourevolution.com/analytical-psychology/active-imagination-technique-essential-steps/2432/" target="_blank">here</a></p>
          </section>
        </div>
        <div>
          <section>
            <h2>Conclusions</h2>
            <p>IFS and meditation has been an incredibly life changing and powerful tool. The process has not been easy. Uncovering and unburdening parts led to even more difficult and challenging experiences. For example, pushing into harder directions in the business and even leaving a relationship of six years. To be challenged is the most enjoyable and best part of being alive. To understand this as a core value of mine, I recommend reading Mark Manson’s &quot;Subtle Art of Not Giving a F**k&quot;*. He argues that we’ll always have problems and challenges to solve. We’ll never complete life. Our trick is to choose the best ones to solve and focus on them. Creating better and new challenges.</p>
          </section>
        </div>
        <figure>
            <img src="https://deepworkphotos.s3.us-east-2.amazonaws.com/article-two-img-thirteen.png" alt="image thirteen" />
            <figcaption><em>*The Not Giving a F**k part is about not giving a f**k about insignificant things and choosing what matters to your unique values to truly give a f**k about them.</em></figcaption>
        </figure>
        <div>
          <section>
              <p>Solving these challenges through IFS, only to move to harder ones, is what makes my life enjoyable, enhances my personal relationships, brings a heaps of creativity and turbocharges my business work. My IFS and meditation practice will be a continued journey, tool and challenge I’ll use for life. I highly recommend it to anyone.</p>
          </section>
        </div>
        <div>
          <section>
            <h2>Final Notes</h2>
            <p><strong>Thank you’s</strong> Thank you to my co-founder Andrej for pushing me to write a vulnerable and authentic post. I wouldn’t feel in a position to share these publicly without the work, help and support we’ve given each other as co-founders and friends. And, to Soulla for introducing me to IFS and kickstarting this journey. <strong>Deep Work’s New Direction</strong> This post is the first in a new direction for Deep Work. We’ve shifted our model based on our principles of health first working and collaboration. Our aim is to allow people to work smarter and live balanced. Through innovative processes for sustainable businesses. In doing so we’ll fulfil our mission is to create the future of work. If that resonates with you, this is the first content of many, keep coming back for more.</p>
            <p>Thank you! - Charlie</p>
          </section>
        </div>
        <footer>
          <p>You can follow us on Medium or some social media platforms for more:</p>
          <p>Instagram: <a href="http://instagram.com/deepwork.studio" target="_blank">@deepwork.studio</a>
          <p>Twitter: <a href="https://twitter.com/deepwork_studio" target="_blank">twitter.com/deepwork_studio</a>
          <p>Or join us on Telegram: <a href="https://t.me/designdeepwork" target="_blank">Telegram</a>
        </footer>    `,
  },
  {
    title: 'Optimal Working – What does Deep Work have to do with barefoot running?',
    date: 'Sep 31, 2020',
    author: 'Charlie Ellington',
    description:
      'A little late to it - last night I finished "Born To Run" by Christopher McDougall. The front cover has a review "destined to become a classic" - I wholeheartedly agree after enjoying this book page to page. A science book yet the closest thing I\'ve to a novel...',
    link: `${convertSpacesToDash('Optimal Working – What does Deep Work have to do with barefoot running?')}`,
    image: "https://deepworkphotos.s3.us-east-2.amazonaws.com/3.png",
    content: `Content coming soon...`
  },
  {
    title: 'Shifting to remote work has been turbocharged, will you be a winner or a loser?',
    date: 'Sep 30, 2020',
    author: 'Charlie Ellington',
    description:
      'The current climate has shown the businesses around the world the unthinkable was possible — employees can work from home or away from a central office. It’s got the potential to ruin productivity, creativity and employee health and wellbeing. ',
    link: `${convertSpacesToDash('Shifting to remote work has been turbocharged, will you be a winner or a loser?')}`,
    image: "https://deepworkphotos.s3.us-east-2.amazonaws.com/4.png",
    content: `Content coming soon...`
  },
  {
    title: 'Combining Cal Newport’s Deep Work and GV Design Sprints to create the Hypersprint',
    date: 'Apr 1, 2020',
    author: 'Charlie Ellington',
    description:
      'Design Sprints optimised for remote work. Cal Newport’s book focuses on how to do work as an individual, our process gets up to ten individuals all doing Deep Work, at the same time to solve the same problem. Before remote work was the thing/norm.',
    link: `${convertSpacesToDash('Combining Cal Newport’s Deep Work and GV Design Sprints to create the Hypersprint')}`,
    image: "https://deepworkphotos.s3.us-east-2.amazonaws.com/5.png",
    content: `Content coming soon...`
  },
]
