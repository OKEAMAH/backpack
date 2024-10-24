import { useEffect, useState } from "react";
import { Element } from "react-xnft";
import { usePluginContext } from "./Context";
import { Component } from "./Component";

export function ViewRenderer({ element }: { element: Element }) {
  const { plugin } = usePluginContext();

  //
  // Force rerender the view whenever the plugin asks for it.
  //
  const [viewData, setViewData] = useState<Element>(element);

  //
  // Reload state on props change.
  //
  useEffect(() => {
    setViewData(element);
  }, [element]);

  //
  // Rerender when needed.
  //
  useEffect(() => {
    plugin.onRender(viewData.id, (newViewData: Element) => {
      setViewData({
        ...newViewData,
      });
    });
  }, [plugin, setViewData]);

  return <Component viewData={viewData} />;
}
