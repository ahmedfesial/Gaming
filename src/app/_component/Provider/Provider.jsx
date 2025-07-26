'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useMemo } from 'react'

export default function Provider({children}) {


  let queryClient =  useMemo(()=> new QueryClient() , []);

  return <QueryClientProvider client={queryClient}>{children }</QueryClientProvider>

  
}
