import os
import socket  # For gethostbyaddr()
import contextlib
from functools import partial

from http.server import CGIHTTPRequestHandler, SimpleHTTPRequestHandler, ThreadingHTTPServer, test

import argparse

parser = argparse.ArgumentParser()
parser.add_argument('port', action='store',
                    default=8000, type=int,
                    nargs='?',
                    help='Specify alternate port [default: 8000]')
args = parser.parse_args()
handler_class = partial(SimpleHTTPRequestHandler,
                        directory="build")

# ensure dual-stack is not disabled; ref #38907


class DualStackServer(ThreadingHTTPServer):
    def server_bind(self):
        # suppress exception when protocol is IPv4
        with contextlib.suppress(Exception):
            self.socket.setsockopt(
                socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        return super().server_bind()


test(
    HandlerClass=handler_class,
    ServerClass=DualStackServer,
    port=args.port,
    bind="0.0.0.0",
)
