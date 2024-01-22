"use client";
import Link from "next/link";
import { Arrow } from "./components/Arrow";
import { LinkTo } from "./components/LinkTo";
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
  h1: "text-opacity-90 dark:text-yellow-400",
  h2: "text-opacity-80 dark:text-blue-400",
  h3: "text-blue-800 dark:text-yellow-200",
};

export default function Home() {
  return (
    <main className="container min-h-screen">
      <div className="my-8 mx-8 lg:mx-8 xl:mx-36 2xl:mx-72">
        <div className="lg:flex lg:flex-row">
          <div className="mb-8 lg:mr-8 lg:basis-1/4 lg:relative">
            <div className="lg:fixed lg:top-8">
              <h1 className={css.h1}>Tee Parham</h1>
              <nav className={cx("hidden lg:block my-8", css.h2)}>
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
                    <a href="#presentations" className="group">
                      PRESENTATIONS&nbsp;
                      <Arrow />
                    </a>
                  </li>
                  <li>
                    <a href="#games" className="group">
                      GAMES&nbsp;
                      <Arrow />
                    </a>
                  </li>
                </ul>
              </nav>
              <section className="my-4">
                <div className="text-3xl text-blue-800 dark:text-yellow-400">
                  <a
                    className="icon-linkedin mr-3"
                    href="https://www.LinkToedin.com/in/teeparham"
                  ></a>
                  <a
                    className="icon-github mr-3"
                    href="https://github.com/teeparham/"
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
            </div>
          </div>
          <div className="leading-relaxed lg:basis-3/4">
            <section className="mt-2 mb-8">
              <h3 className={css.h3} id="work">
                Experience
              </h3>
              <ul>
                <li className="mb-3">
                  I was the technical lead for the Public Agencies Pillar and
                  the Organizations Admin team at{" "}
                  <LinkTo href="https://nextdoor.com/">Nextdoor</LinkTo> where I
                  led projects like{" "}
                  <LinkTo href={urls.faves}>Neighborhood Faves</LinkTo>.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://neighborland.com/">Neighborland</LinkTo>{" "}
                  was a public engagement platform designed for government
                  agencies, place-makers, and civic organizations. Our mission
                  was to empower residents to shape the development of their
                  neighborhoods. To do this, we helped improve the way civic
                  organizations collaborated with their communities. Over 3
                  million people participated on Neighborland, and our
                  partners&apos; projects have yielded{" "}
                  <LinkTo href={urls.billions}>billions</LinkTo> of dollars in
                  social and economic impact. Neighborland was{" "}
                  <LinkTo href={urls.acquired}>acquired</LinkTo> by Nextdoor in
                  2019.
                </li>
                <li className="mb-3">
                  I helped{" "}
                  <LinkTo href="https://designerfund.com/">
                    Designer Fund
                  </LinkTo>{" "}
                  attract and connect the world&apos;s best designers with top
                  technology companies by upgrading the back end and rebuilding
                  the front end of their events app.
                </li>
                <li className="mb-3">
                  I helped{" "}
                  <LinkTo href="https://brightfunds.org/">Bright Funds</LinkTo>{" "}
                  build a platform for charitable giving and volunteering.
                </li>
                <li className="mb-3">
                  I led development of an ERP system for{" "}
                  <LinkTo href="https://www.nesterhosiery.com/">
                    Nester Hosiery
                  </LinkTo>{" "}
                  so they could make the world&apos;s best wool socks more
                  efficiently. My team helped the company manage manufacturing
                  of over 5000 items and grow 20% annually for over 8 years. You
                  can{" "}
                  <LinkTo href="https://www.farmtofeet.com/">
                    buy some socks
                  </LinkTo>{" "}
                  from their Farm to Feet brand.
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h3 className={css.h3} id="oss">
                Open Source Projects
              </h3>
              <ul>
                <li className="mb-3">
                  <LinkTo href="https://github.com/teeparham/gemdiff">
                    gemdiff
                  </LinkTo>{" "}
                  is a command-line tool to find source code for ruby gems. You
                  can compare source code differences between the current
                  version of a gem in your bundle and the latest version of the
                  gem. gemdiff connects gem version management (rubygems +
                  bundler) with source code (GitHub).
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/rgeo/rgeo">rgeo</LinkTo> is a
                  geospatial data library for ruby. It wraps the GEOS and Proj C
                  libraries and provides spatial types such as point,
                  linestring, and polygon.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/rgeo/activerecord-postgis-adapter">
                    activerecord-postgis-adapter
                  </LinkTo>{" "}
                  is the PostGIS ActiveRecord adapter. Use it to connect
                  ActiveRecord models to your PostgreSQL + PostGIS database,
                  with all the geometry type methods from rgeo.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/haml/haml">Haml</LinkTo> is a
                  templating engine for HTML. It&apos;s designed to make it both
                  easier and more pleasant to write HTML documents, by
                  eliminating redundancy, reflecting the underlying structure
                  that the document represents, and providing an elegant syntax
                  that is both powerful and easy to understand.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/cache_rocket">
                    cache_rocket
                  </LinkTo>{" "}
                  improves fragment caching efficiency in Rails. CacheRocket
                  allows caching more generic html fragments and allowing the
                  contents of the cached fragments to be replaced with dynamic
                  content.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/pres">
                    pres
                  </LinkTo>{" "}
                  provides simple Rails presenter modules and classes.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/sluggi">
                    sluggi
                  </LinkTo>{" "}
                  is a friendly_id-inspired slugging library for ActiveRecord
                  models. Use it to build nice-looking URLs. It provides basic
                  slugs, slug history, and the ability to define multiple slug
                  candidates.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/scopy">
                    scopy
                  </LinkTo>{" "}
                  provides common ActiveRecord model scopes for common columns
                  including created_at and name.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/resque_solo">
                    resque_solo
                  </LinkTo>{" "}
                  ensures unique jobs in Resque.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/neighborland/anchored">
                    anchored
                  </LinkTo>{" "}
                  auto-LinkTos URLs in HTML text using ruby.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/rgeo/rgeo-geojson">
                    rgeo-geojson
                  </LinkTo>{" "}
                  provides GeoJSON serialization support to RGeo objects.
                </li>
                <li className="mb-3">
                  <LinkTo href="https://github.com/rgeo/rgeo-activerecord">
                    rgeo-activerecord
                  </LinkTo>{" "}
                  provides RGeo ActiveRecord extensions, used by the PostGIS,
                  MySql, and Spatialite database adapters.
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h3 className={css.h3} id="presentations">
                Presentations
              </h3>
              <ul>
                <li className="mb-3">
                  I was a guest on Devchat.tv&apos;s{" "}
                  <LinkTo href={urls.rogues}>Ruby Rogues podcast</LinkTo> along
                  with RGeo creator Daniel Azuma. We discussed geospatial
                  programming in ruby.
                </li>
                <li className="mb-3">
                  I presented at Boulder Ruby about{" "}
                  <LinkTo href={urls.cacheRocket}>
                    HTML fragment caching in rails.
                  </LinkTo>
                </li>
                <li className="mb-3">
                  I also presented at Boulder Ruby about{" "}
                  <LinkTo href="https://www.slideshare.net/teeparham/gemdiff">
                    gem dependency updates with gemdiff.
                  </LinkTo>
                </li>
              </ul>
            </section>
            <section className="mb-16">
              <h3 className={`mb-3 ${css.h3}`} id="games">
                Games
              </h3>
              <Link href="/mastermind" className="group">
                Mastermind&nbsp;
                <Arrow />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
