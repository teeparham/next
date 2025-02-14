import Link from "next/link";
import { Arrow } from "./components/Arrow";
import { LinkTo } from "./components/LinkTo";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Skills } from "./components/Skills";
import { cx } from "./utils";

const urls = {
  acquired:
    "https://handbook.neighborland.com/nextdoor-acquires-neighborland-e12237b7e8fd",
  billions:
    "https://handbook.neighborland.com/measuring-what-matters-b635f20370b8",
  cacheRocket:
    "https://www.slideshare.net/teeparham/rails-html-fragment-caching-with-cache-rocket",
  faves:
    "https://www.businesswire.com/news/home/20230718746480/en/Nextdoor-Announces-the-2023-Neighborhood-Faves-Winners-and-Unveils-Special-Bell-Ringing-Event-at-the-New-York-Stock-Exchange",
  rogues:
    "https://topenddevs.com/podcasts/ruby-rogues/episodes/rr-356-geospatial-programming-in-ruby-with-daniel-azuma-and-tee-parham",
};

const css = {
  h1: "text-black dark:text-yellow-400",
  h2: "text-blue-900 dark:text-blue-400",
  h3: "text-blue-900 dark:text-yellow-200",
};

function Profiles() {
  return (
    <div className="text-3xl text-blue-800 dark:text-yellow-400">
      <a
        className="icon-linkedin mr-3"
        href="https://www.linkedin.com/in/teeparham"
      ></a>
      <a className="icon-github mr-3" href="https://github.com/teeparham/"></a>
      <a className="icon-twitter mr-3" href="https://twitter.com/teeparham"></a>
      <a
        className="icon-stackoverflow"
        href="https://stackoverflow.com/users/162934/tee"
      ></a>
    </div>
  );
}

function Nav() {
  return (
    <nav className={cx("hidden lg:block my-8 font-semibold", css.h2)}>
      <ul>
        <li className="mb-2">
          <a href="#work" className="group">
            EXPERIENCE&nbsp;
            <Arrow />
          </a>
        </li>
        <li className="mb-2">
          <a href="#oss" className="group">
            OPEN SOURCE&nbsp;
            <Arrow />
          </a>
        </li>
        <li className="mb-2">
          <a href="#games" className="group">
            GAMES & DEMOS&nbsp;
            <Arrow />
          </a>
        </li>
        <li className="mb-2">
          <a href="#skills" className="group">
            SKILLS&nbsp;
            <Arrow />
          </a>
        </li>
        <li>
          <a href="#presentations" className="group">
            PRESENTATIONS&nbsp;
            <Arrow />
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Experience() {
  return (
    <>
      <h3 className={cx("pt-2", css.h3)} id="work">
        Experience
      </h3>
      <ul>
        <li className="mb-3">
          I am an experienced software engineer and entrepreneur. I have founded
          companies, worked with startups and Fortune 500 businesses, and met
          many amazing people. I am passionate about building effective,
          performant software systems with simple and delightful user
          experiences.
        </li>
        <li className="mb-3">
          I served as the technical lead for the Public Agencies Pillar and the
          Organizations Admin team at{" "}
          <LinkTo href="https://nextdoor.com/">Nextdoor</LinkTo>. The Public
          Agencies team supported thousands of government agencies, including
          the State of California, the Fire Department of the City of New York
          (FDNY), and the US Census Bureau. The Organizations team supported
          tens of millions of local business pages. I led projects like{" "}
          <LinkTo href={urls.faves}>Neighborhood Faves</LinkTo>, which created
          meaningful connections between neighbors and local businesses.
        </li>
        <li className="mb-3">
          <LinkTo href="https://neighborland.com/">Neighborland</LinkTo> was a
          public engagement platform designed for government agencies,
          place-makers, and civic organizations. Our mission was to empower
          residents to shape the development of their neighborhoods. To do this,
          we helped improve the way civic organizations collaborated with their
          communities. Over 3 million people participated on Neighborland, and
          our partners&apos; projects have yielded{" "}
          <LinkTo href={urls.billions}>billions</LinkTo> of dollars in social
          and economic impact. Neighborland was{" "}
          <LinkTo href={urls.acquired}>acquired</LinkTo> by Nextdoor in 2019.
        </li>
        <li className="mb-3">
          I helped the venture capital firm{" "}
          <LinkTo href="https://designerfund.com/">Designer Fund</LinkTo>{" "}
          attract and connect the world&apos;s best designers with top
          technology companies by modernizing their in-house events application.
        </li>
        <li className="mb-3">
          I helped <LinkTo href="https://brightfunds.org/">Bright Funds</LinkTo>{" "}
          build a platform for charitable giving and volunteering. I advised the
          CTO on foundational architecture, code quality, and testing. I built
          partner integration systems for clients such as Cisco and VMWare.
        </li>
        <li className="mb-3">
          I created and led development of SockInfo, an ERP system for{" "}
          <LinkTo href="https://www.nesterhosiery.com/">Nester Hosiery</LinkTo>{" "}
          so they could make the world&apos;s best merino wool socks more
          efficiently. Our team helped the company manage manufacturing of over
          5000 items and grow 20% annually for over 8 years. You can buy some
          socks from their{" "}
          <LinkTo href="https://www.farmtofeet.com/">Farm to Feet</LinkTo>{" "}
          brand.
        </li>
      </ul>
    </>
  );
}

function OpenSource() {
  return (
    <>
      <h3 className={cx("pt-2", css.h3)} id="oss">
        Open Source Projects
      </h3>
      <ul>
        <li className="mb-3">
          <LinkTo href="https://github.com/teeparham/next">
            This portfolio website
          </LinkTo>{" "}
          is a Next.js React application hosted on Vercel. It is built with
          TypeScript and Tailwind CSS.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/teeparham/gemdiff">gemdiff</LinkTo>{" "}
          is a command-line application to find source code for ruby gems.
          Compare source code differences between the current version of a gem
          in your bundle and the latest version of the gem. gemdiff connects gem
          version management (rubygems + bundler) with source code on GitHub.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/rgeo/rgeo">rgeo</LinkTo> is a
          geospatial data library for ruby. It wraps the GEOS and Proj C
          libraries and provides spatial types such as point, linestring, and
          polygon. The gem has over 23 million downloads. I was the maintainer
          for the RGeo organization for over six years.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/rgeo/rgeo-geojson">
            rgeo-geojson
          </LinkTo>{" "}
          provides GeoJSON serialization support to RGeo objects.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/rgeo/activerecord-postgis-adapter">
            activerecord-postgis-adapter
          </LinkTo>{" "}
          is the PostGIS ActiveRecord adapter. Use it to connect Rails
          ActiveRecord models to a PostgreSQL + PostGIS database, with all the
          geometry type methods from RGeo.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/haml/haml">Haml</LinkTo> is a
          templating engine for HTML. It is designed to make it easier and more
          pleasant to write HTML documents. I was a maintainer for five years.
          One of my significant{" "}
          <LinkTo href="https://github.com/haml/haml/pull/894">
            contributions
          </LinkTo>{" "}
          was removing the &quot;pretty&quot; code formatting option, which
          simplified the code base and sped up the engine. The gem has over 150
          million downloads.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/neighborland/cache_rocket">
            cache_rocket
          </LinkTo>{" "}
          improves fragment caching efficiency in Rails. CacheRocket caches more
          generic HTML fragments and allows the contents of the cached fragments
          to be replaced with dynamic content.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/neighborland/pres">pres</LinkTo>{" "}
          provides Rails presenter modules and classes for server-side frontend
          components.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/neighborland/sluggi">sluggi</LinkTo>{" "}
          is a friendly_id-inspired slugging library for Rails ActiveRecord
          models. It provides basic slugs, slug history, and the ability to
          define multiple slug candidates.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/neighborland/resque_solo">
            resque_solo
          </LinkTo>{" "}
          ensures unique jobs in Resque, the Redis-backed library for background
          jobs.
        </li>
        <li className="mb-3">
          <LinkTo href="https://github.com/neighborland/anchored">
            anchored
          </LinkTo>{" "}
          auto-links URLs in HTML text.
        </li>
      </ul>
    </>
  );
}

function Games() {
  return (
    <>
      <h3 className={cx("pt-2 mb-3", css.h3)} id="games">
        Games & Demos
      </h3>
      <Link href="/mastermind" className={cx("group block", css.h2)}>
        Mastermind&nbsp;
        <Arrow />
      </Link>
      <div className="mb-3">
        This is a React & Tailwind implementation of the classic Mastermind
        game. I originally wrote this in 2019, and modernized it with Typescript
        in 2024.
      </div>
      <Link href="/2048" className={cx("group block", css.h2)}>
        2048&nbsp;
        <Arrow />
      </Link>
      <div className="mb-3">
        This is a React & Tailwind implemention of the online hit game 2048. I
        added simulator buttons to play the game for you, and a high score
        tracker.
      </div>
      <Link href="/utr" className={cx("group block", css.h2)}>
        UTR&nbsp;
        <Arrow />
      </Link>
      <div>
        Search for Universal Tennis Ratings via the UTR Sports API. This demo
        app has some interesting properties. The API queries are done
        server-side to avoid CORS restrictions in browser API calls. The are two
        flavors of Next.js React Server Components: the page itself and the
        player detail component.
      </div>
    </>
  );
}

function Presentations() {
  return (
    <>
      <h3 className={cx("pt-2", css.h3)} id="presentations">
        Presentations
      </h3>
      <ul>
        <li className="mb-3">
          I was a guest on Devchat.tv&apos;s{" "}
          <LinkTo href={urls.rogues}>Ruby Rogues podcast</LinkTo> along with
          RGeo creator Daniel Azuma. We discussed geospatial programming in
          ruby.
        </li>
        <li className="mb-3">
          I presented at Boulder Ruby about{" "}
          <LinkTo href={urls.cacheRocket}>
            HTML fragment caching in rails.
          </LinkTo>
        </li>
        <li className="mb-3">
          I presented at Boulder Ruby about{" "}
          <LinkTo href="https://www.slideshare.net/teeparham/gemdiff">
            gem dependency management.
          </LinkTo>
        </li>
      </ul>
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <h3 className={cx("pt-2", css.h3)} id="skills">
        Skills
      </h3>
      <p className="mb-8">
        Below is an interactive grid of skills I have acquired and technologies
        I have expertise in. Tap on the bar to filter the list of skills. The
        larger the label, the more expertise. Some of the technologies listed
        are not tools that I would choose to use again (such as Bootstrap or
        LESS), but I have learned from using them.
      </p>
      <Skills />
    </>
  );
}

export default function Home() {
  return (
    <main className="container min-h-screen">
      <div className="my-8 mx-8 lg:mx-8 xl:mx-36 2xl:mx-72">
        <div className="lg:flex lg:flex-row">
          <div className="mb-8 lg:mr-8 lg:basis-1/4 lg:relative">
            <div className="lg:fixed lg:top-8">
              <h1 className={css.h1}>Tee Parham</h1>
              <Nav />
              <section className="my-12 hidden lg:block">
                <Profiles />
              </section>
              <section className="my-12 hidden lg:block">
                <ThemeSwitch />
              </section>
            </div>
          </div>
          <div className="leading-relaxed lg:basis-3/4">
            <section className="mb-12">
              <Experience />
            </section>
            <section className="mb-12">
              <OpenSource />
            </section>
            <section className="mb-12">
              <Games />
            </section>
            <section className="mb-12 min-h-60">
              <SkillsSection />
            </section>
            <section className="mb-12">
              <Presentations />
            </section>
            <section className="my-12 lg:hidden">
              <hr className="mb-6 border-gray-800 dark:border-gray-200" />
              <div className="sm:flex">
                <Profiles />
                <div className="sm:grow mt-6 sm:mt-0"></div>
                <ThemeSwitch />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
