import Image from "next/image";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });

const urls = {
  billions:
    "https://handbook.neighborland.com/measuring-what-matters-b635f20370b8",
  faves:
    "https://www.businesswire.com/news/home/20230718746480/en/Nextdoor-Announces-the-2023-Neighborhood-Faves-Winners-and-Unveils-Special-Bell-Ringing-Event-at-the-New-York-Stock-Exchange",
  acquired:
    "https://handbook.neighborland.com/nextdoor-acquires-neighborland-e12237b7e8fd",
  rogues:
    "https://devchat.tv/ruby-rogues/rr-356-geospatial-programming-in-ruby-with-daniel-azuma-and-tee-perham",
};

const Arrow = () => {
  return (
    <span
      className={`inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ${interFont.className}`}
    >
      -&gt;
    </span>
  );
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      className="underline text-blue-700 dark:text-blue-300 underline-offset-2 hover:decoration-2"
    >
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between py-8">
      <div className="">
        <div className="mb-8 text-left">
          <h1 className="text-opacity-90 dark:text-yellow-400">Tee Parham</h1>
          <h2 className="text-opacity-70 dark:text-blue-400">
            Idealist, code writer, technical leader.
          </h2>
        </div>
        <div className="text-left leading-relaxed">
          <section className="mb-8">
            <h3 className="text-blue-400 dark:text-yellow-200">Work</h3>
            <ul>
              <li className="mb-3">
                I was the technical lead for the Public Agencies Pillar and the
                Organizations Admin team at{" "}
                <Link href="https://nextdoor.com/">Nextdoor</Link> where I led
                projects like <Link href={urls.faves}>Neighborhood Faves</Link>.
              </li>
              <li className="mb-3">
                <Link href="https://neighborland.com/">Neighborland</Link> was a
                public engagement platform designed for government agencies,
                place-makers, and civic organizations. Our mission was to
                empower residents to shape the development of their
                neighborhoods. To do this, we helped improve the way civic
                organizations collaborated with their communities. Over 3
                million people participated on Neighborland, and our partners'
                projects have yielded <Link href={urls.billions}>billions</Link>{" "}
                of dollars in social and economic impact. Neighborland was{" "}
                <Link href={urls.acquired}>acquired</Link> by Nextdoor in 2019.
              </li>
              <li className="mb-3">
                I helped{" "}
                <Link href="https://designerfund.com/">Designer Fund</Link>{" "}
                attract and connect the world's best designers with top
                technology companies by rebuilding the front end of their events
                app.
              </li>
              <li className="mb-3">
                I helped{" "}
                <Link href="https://brightfunds.org/">Bright Funds</Link> build
                a platform for charitable giving and volunteering.
              </li>
              <li className="mb-3">
                I led development of an ERP system for{" "}
                <Link href="https://www.nesterhosiery.com/">
                  Nester Hosiery
                </Link>{" "}
                so they could make the world's best wool socks more efficiently.
                My team helped the company manage manufacturing of over 5000
                items and grow 20% annually for over 8 years. You can{" "}
                <Link href="https://www.farmtofeet.com/">buy some socks</Link>{" "}
                from their Farm to Feet brand.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h3 className="text-blue-400 dark:text-yellow-200">Internet</h3>
            <div className="text-4xl dark:text-yellow-400">
              <a
                className="icon-github mr-3"
                href="https://github.com/teeparham/"
              ></a>
              <a
                className="icon-linkedin mr-3"
                href="https://www.linkedin.com/in/teeparham"
              ></a>
              <a
                className="icon-twitter mr-3"
                href="https://twitter.com/teeparham"
              ></a>
              <a
                className="icon-stackoverflow"
                href="https://stackoverflow.com/users/162934/tee"
              ></a>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-blue-400 dark:text-yellow-200">Open source projects in ruby</h3>
            <ul>
              <li className="mb-3">
                <Link href="https://github.com/teeparham/gemdiff">gemdiff</Link>{" "}
                is a command-line tool to find source code for ruby gems. You
                can compare source code differences between the current version
                of a gem in your bundle and the latest version of the gem.
                gemdiff connects gem version management (rubygems + bundler)
                with source code (GitHub).
              </li>
              <li className="mb-3">
                <Link href="https://github.com/rgeo/rgeo">rgeo</Link> is a
                geospatial data library for ruby. It wraps the GEOS and Proj C
                libraries and provides spatial types such as point, linestring,
                and polygon.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/rgeo/activerecord-postgis-adapter">
                  activerecord-postgis-adapter
                </Link>{" "}
                is the PostGIS ActiveRecord adapter. Use it to connect
                ActiveRecord models to your PostgreSQL + PostGIS database, with
                all the geometry type methods from rgeo.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/haml/haml">Haml</Link> is a
                templating engine for HTML. It's designed to make it both easier
                and more pleasant to write HTML documents, by eliminating
                redundancy, reflecting the underlying structure that the
                document represents, and providing an elegant syntax that's both
                powerful and easy to understand.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/cache_rocket">
                  cache_rocket
                </Link>{" "}
                improves fragment caching efficiency in Rails. CacheRocket
                allows caching more generic html fragments and allowing the
                contents of the cached fragments to be replaced with dynamic
                content.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/pres">pres</Link>{" "}
                provides simple Rails presenter modules and classes.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/sluggi">
                  sluggi
                </Link>{" "}
                is a friendly_id-inspired slugging library for ActiveRecord
                models. Use it to build nice-looking URLs. It provides basic
                slugs, slug history, and the ability to define multiple slug
                candidates.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/scopy">scopy</Link>{" "}
                provides common ActiveRecord model scopes for common columns
                including created_at and name.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/resque_solo">
                  resque_solo
                </Link>{" "}
                ensures unique jobs in Resque.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/neighborland/anchored">
                  anchored
                </Link>{" "}
                auto-links URLs in HTML text using ruby.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/rgeo/rgeo-geojson">
                  rgeo-geojson
                </Link>{" "}
                provides GeoJSON serialization support to RGeo objects.
              </li>
              <li className="mb-3">
                <Link href="https://github.com/rgeo/rgeo-activerecord">
                  rgeo-activerecord
                </Link>{" "}
                provides RGeo ActiveRecord extensions, used by the PostGIS,
                MySql, and Spatialite database adapters.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h3 className="text-blue-400 dark:text-yellow-200">Presentations</h3>
            <ul>
              <li className="mb-3">
                I was a guest on Devchat.tv's{" "}
                <Link href={urls.rogues}>Ruby Rogues podcast</Link> along with
                RGeo creator Daniel Azuma. We discussed geospatial programming
                in ruby.
              </li>
              <li className="mb-3">
                I presented at Boulder Ruby about{" "}
                <Link href="https://www.slideshare.net/teeparham/rails-html-fragment-caching-with-cache-rocket">
                  HTML fragment caching in rails.
                </Link>
              </li>
              <li className="mb-3">
                I also presented at Boulder Ruby about{" "}
                <Link href="https://www.slideshare.net/teeparham/gemdiff">
                  gem dependency updates with gemdiff.
                </Link>
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h3>Be a winner</h3>
            <ul>
              <li>mastermind</li>
            </ul>
          </section>
          <section className="mb-8">
            <h3>See the possibilities</h3>
            <ul>
              <li>n-queens</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="mb-32 grid text-center md:max-w-5xl md:w-full md:mb-0 md:grid-cols-4 md:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3">
            Link&nbsp;
            <Arrow />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-opacity-70`}>
            Desciption of link. Paragraph a b c d e ipsum ipsum ipsum.
          </p>
        </a>
      </div>
    </main>
  );
}
