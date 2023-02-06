import Link from "next/link";
import React from "react";
import styles from "../styles/Errors.module.css";

interface errorProps {
  active: boolean;
  type: number;
}

interface Props {
  error: errorProps;
}

const Errors: React.FC<Props> = ({ error }) => {
  return (
    <>
      <div className={styles.error_container}>
        <div className={styles.header}>
          <h1>
            Oops<span>!</span>
          </h1>
        </div>
        <div className={styles.error_content}>
          {error && (
            <div className={styles.error}>
              {error.type === 403 ? (
                <div className={styles.error_card}>
                  <div className={styles.error_code}>
                    <h1>403</h1>
                  </div>
                  <article>
                    <p>API rate limit exceeded</p>
                    <small>
                      HTTP Error 403 (Forbidden) means that the client is unable
                      to access the requested resource. This can occur due to
                      various reasons such as authentication failure,
                      insufficient permissions, or when the resource is
                      restricted to specific IP addresses or user-agents. The
                      server returns a 403 response to indicate that the
                      clien&APOS;s request was valid, but the server will not
                      fulfill it.
                    </small>
                  </article>
                </div>
              ) : error.type === 404 ? (
                <div className={styles.error_card}>
                  <div className={styles.error_code}>
                    <h1>404</h1>
                  </div>
                  <article>
                    <p>User Not found</p>
                    <small>
                      HTTP Error 404 (Not Found) indicates that the server was
                      unable to find the requested resource. This error occurs
                      when the client requests a URL that does not exist on the
                      server or the server is unable to locate the requested
                      file or script. It could be a typing error in the URL, a
                      broken link, or the resource may have been moved or
                      deleted. The server returns a 404 response to indicate to
                      the client that the requested resource could not be found.
                    </small>
                  </article>
                </div>
              ) : (
                <div className={styles.error_card}>
                  <div className={styles.error_code}>
                    <h1>400</h1>
                  </div>
                  <article>
                    <p>Bad Request</p>
                    <small>
                      HTTP Error 400 (Bad Request) indicates that the server
                      cannot process the request due to invalid syntax. This
                      error occurs when the client sends a request to the server
                      with incorrect or incomplete information, such as an
                      invalid URL, incorrect data in the request headers, or an
                      improperly formatted request body. The server returns a
                      400 response to indicate that the client&APOS;s request
                      was malformed and could not be processed. This error is
                      often caused by a client-side issue and can be resolved by
                      checking the client&APOS;s request for errors and fixing
                      any issues before sending the request again.
                    </small>
                  </article>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.btn}>
          <Link href=".." className={styles.link}>
            Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Errors;
