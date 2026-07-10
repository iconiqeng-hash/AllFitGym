"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HorizontalCarousel({
  children,
  className = "",
  trackClassName = "",
  trackStyle,
  singleCardMobile = true,
  scrollbarMobileOnly = false,
}) {
  const scrollRef = useRef(null);
  const [metrics, setMetrics] = useState({ scrollLeft: 0, clientWidth: 0, scrollWidth: 0 });

  const updateMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setMetrics({
      scrollLeft: el.scrollLeft,
      clientWidth: el.clientWidth,
      scrollWidth: el.scrollWidth,
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    updateMetrics();
    el.addEventListener("scroll", updateMetrics, { passive: true });
    window.addEventListener("resize", updateMetrics);

    const ro = new ResizeObserver(updateMetrics);
    ro.observe(el);
    Array.from(el.children).forEach((child) => ro.observe(child));

    return () => {
      el.removeEventListener("scroll", updateMetrics);
      window.removeEventListener("resize", updateMetrics);
      ro.disconnect();
    };
  }, [updateMetrics, children]);

  const canScroll = metrics.scrollWidth > metrics.clientWidth + 2;
  const maxScroll = metrics.scrollWidth - metrics.clientWidth;
  const thumbWidthPct = canScroll ? (metrics.clientWidth / metrics.scrollWidth) * 100 : 100;
  const thumbLeftPct =
    canScroll && maxScroll > 0 ? (metrics.scrollLeft / maxScroll) * (100 - thumbWidthPct) : 0;

  const scrollbarClass = scrollbarMobileOnly ? "carousel-scrollbar sm:hidden" : "carousel-scrollbar";

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div
        ref={scrollRef}
        className={`carousel-track flex ${singleCardMobile ? "carousel-track--single-mobile" : ""} ${trackClassName}`}
        style={trackStyle}
      >
        {children}
      </div>
      {canScroll && (
        <div className={scrollbarClass} aria-hidden="true">
          <div
            className="carousel-scrollbar-thumb"
            style={{ width: `${thumbWidthPct}%`, left: `${thumbLeftPct}%` }}
          />
        </div>
      )}
    </div>
  );
}

export function CarouselScrollIndicator({ progress, total, mobileOnly = true }) {
  if (total <= 1) return null;

  const thumbWidthPct = (1 / total) * 100;
  const thumbLeftPct = progress * (100 - thumbWidthPct);
  const scrollbarClass = mobileOnly ? "carousel-scrollbar sm:hidden" : "carousel-scrollbar";

  return (
    <div className={scrollbarClass} aria-hidden="true">
      <div
        className="carousel-scrollbar-thumb"
        style={{ width: `${thumbWidthPct}%`, left: `${thumbLeftPct}%` }}
      />
    </div>
  );
}
