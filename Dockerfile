FROM node:14.13.0-slim AS base
    ENV APPDIR /app
    EXPOSE $PORT
    WORKDIR $APPDIR
    ADD . $APPDIR

FROM base AS development
    ARG MUID
    ARG MGID
    RUN addgroup --gid $MGID --system appuser && \
        adduser --uid $MUID --system appuser --gid $MGID
    RUN chown -R appuser:appuser $APPDIR
    USER appuser
    ENTRYPOINT ["/app/entrypoint.sh"]
